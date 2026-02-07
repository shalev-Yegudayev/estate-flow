/**
 * Data integrity verification after migrating users → auth.users + profiles.
 * Run with: npx tsx scripts/verify-migration.ts
 * Requires DATABASE_URL and optionally Supabase URL/key for auth check.
 */

import "dotenv/config";
import { prisma } from "@/lib/clients/prisma";

async function main() {
  console.log("🔍 Verifying migration (profiles + FK integrity)...\n");

  const profileCount = await prisma.profile.count();
  console.log(`  public.profiles count: ${profileCount}`);

  const propertyCount = await prisma.property.count();
  const propertiesWithoutOwner = await prisma.property.findMany({
    where: {
      ownerId: { notIn: (await prisma.profile.findMany({ select: { id: true } })).map((p) => p.id) },
    },
    select: { id: true, ownerId: true },
  });
  const orphanedProperties = propertiesWithoutOwner.length;
  console.log(`  properties count: ${propertyCount}`);
  console.log(`  properties with owner_id not in profiles: ${orphanedProperties}`);

  const tenantsCount = await prisma.tenant.count();
  const orphanedTenants = await prisma.tenant.count({
    where: {
      ownerId: { notIn: (await prisma.profile.findMany({ select: { id: true } })).map((p) => p.id) },
    },
  });
  console.log(`  tenants count: ${tenantsCount}`);
  console.log(`  tenants with owner_id not in profiles: ${orphanedTenants}`);

  const txCount = await prisma.financialTransaction.count();
  const orphanedTx = await prisma.financialTransaction.count({
    where: {
      userId: { notIn: (await prisma.profile.findMany({ select: { id: true } })).map((p) => p.id) },
    },
  });
  console.log(`  financial_transactions count: ${txCount}`);
  console.log(`  financial_transactions with user_id not in profiles: ${orphanedTx}`);

  const docCount = await prisma.document.count();
  const orphanedDocs = await prisma.document.count({
    where: {
      userId: { notIn: (await prisma.profile.findMany({ select: { id: true } })).map((p) => p.id) },
    },
  });
  console.log(`  documents count: ${docCount}`);
  console.log(`  documents with user_id not in profiles: ${orphanedDocs}`);

  const ok =
    orphanedProperties === 0 && orphanedTenants === 0 && orphanedTx === 0 && orphanedDocs === 0;

  console.log(ok ? "\n✅ All FKs valid: no orphaned rows." : "\n❌ Orphaned rows detected.");
  process.exit(ok ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
