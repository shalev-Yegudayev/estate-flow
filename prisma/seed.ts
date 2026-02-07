import { PrismaClient, PropertyType, PropertyTag } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create a sample user (property owner)
  const user = await prisma.user.upsert({
    where: { email: "shalev12385@gmail.com" },
    update: {},
    create: {
      email: "shalev12385@gmail.com",
      firstName: "Shalev",
      lastName: "Yegudayev",
      phone: "+972-50-657-2220",
    },
  });
  console.log(`✓ Created user: ${user.email}`);

  // Create 10 diverse properties
  const properties = [
    {
      type: PropertyType.APARTMENT,
      tags: [PropertyTag.RENTED],
      address: "Rothschild Boulevard 45",
      city: "Tel Aviv",
      country: "IL",
      bedrooms: 3,
      bathrooms: 2.0,
      area: 95.5,
      floor: 4,
      yearBuilt: 2018,
      purchaseDate: new Date("2019-03-15"),
      purchasePrice: 2850000,
      monthlyRent: 8500,
      description:
        "Modern apartment in the heart of Tel Aviv with stunning city views. Recently renovated with high-end finishes.",
      features: ["parking", "elevator", "balcony", "air-conditioning", "storage"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800",
      ],
      ownerId: user.id,
    },
    {
      type: PropertyType.HOUSE,
      tags: [PropertyTag.VACANT, PropertyTag.FOR_SALE],
      address: "HaNassi Street 12",
      city: "Jerusalem",
      country: "IL",
      bedrooms: 5,
      bathrooms: 3.5,
      area: 220.0,
      floor: null,
      yearBuilt: 2005,
      purchaseDate: new Date("2010-07-20"),
      purchasePrice: 4200000,
      monthlyRent: null,
      description:
        "Spacious family home in a quiet residential neighborhood. Features a large garden and private parking.",
      features: ["garden", "parking", "security-system", "solar-panels", "bbq-area"],
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      ],
      ownerId: user.id,
    },
    {
      type: PropertyType.COMMERCIAL,
      tags: [PropertyTag.RENTED],
      address: "Herzl Street 88",
      city: "Haifa",
      country: "IL",
      bedrooms: null,
      bathrooms: 2.0,
      area: 180.0,
      floor: 1,
      yearBuilt: 2012,
      purchaseDate: new Date("2015-11-01"),
      purchasePrice: 3500000,
      monthlyRent: 12000,
      description:
        "Prime retail space in busy commercial area. High foot traffic and excellent visibility.",
      features: ["wheelchair-accessible", "display-windows", "back-storage", "parking"],
      images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"],
      ownerId: user.id,
    },
    {
      type: PropertyType.APARTMENT,
      tags: [PropertyTag.UNDER_RENOVATION],
      address: "Ben Yehuda 156",
      city: "Tel Aviv",
      country: "IL",
      bedrooms: 2,
      bathrooms: 1.0,
      area: 68.0,
      floor: 2,
      yearBuilt: 1985,
      purchaseDate: new Date("2023-01-10"),
      purchasePrice: 1850000,
      monthlyRent: null,
      description:
        "Charming vintage apartment undergoing complete renovation. Will feature modern amenities while preserving original character.",
      features: ["high-ceilings", "natural-light"],
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      ],
      ownerId: user.id,
    },
    {
      type: PropertyType.PARKING,
      tags: [PropertyTag.RENTED],
      address: "Dizengoff Center, Level -2",
      city: "Tel Aviv",
      country: "IL",
      bedrooms: null,
      bathrooms: null,
      area: 12.5,
      floor: -2,
      yearBuilt: 1999,
      purchaseDate: new Date("2020-05-15"),
      purchasePrice: 185000,
      monthlyRent: 800,
      description:
        "Covered parking spot in central Tel Aviv shopping center. Secure and convenient.",
      features: ["covered", "24/7-access", "security"],
      images: ["https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800"],
      ownerId: user.id,
    },
    {
      type: PropertyType.LAND,
      tags: [PropertyTag.FOR_SALE],
      address: "Moshav Road, Plot 47",
      city: "Kfar Saba",
      country: "IL",
      bedrooms: null,
      bathrooms: null,
      area: 500.0,
      floor: null,
      yearBuilt: null,
      purchaseDate: new Date("2018-09-01"),
      purchasePrice: 1200000,
      monthlyRent: null,
      description:
        "Agricultural land with building permit potential. Flat terrain, suitable for residential development.",
      features: ["water-connection", "electricity-available", "road-access"],
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      ownerId: user.id,
    },
    {
      type: PropertyType.APARTMENT,
      tags: [PropertyTag.RENTED],
      address: "Jabotinsky Street 72",
      city: "Ramat Gan",
      country: "IL",
      bedrooms: 4,
      bathrooms: 2.5,
      area: 115.0,
      floor: 8,
      yearBuilt: 2020,
      purchaseDate: new Date("2021-02-28"),
      purchasePrice: 3100000,
      monthlyRent: 9200,
      description:
        "Luxury penthouse apartment with panoramic views. Top-floor unit with premium finishes and smart home features.",
      features: ["elevator", "parking", "balcony", "smart-home", "gym-access", "concierge"],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      ],
      ownerId: user.id,
    },
    {
      type: PropertyType.STORAGE,
      tags: [PropertyTag.VACANT],
      address: "Industrial Zone, Unit 15",
      city: "Petah Tikva",
      country: "IL",
      bedrooms: null,
      bathrooms: 1.0,
      area: 45.0,
      floor: null,
      yearBuilt: 2010,
      purchaseDate: new Date("2017-06-12"),
      purchasePrice: 320000,
      monthlyRent: null,
      description:
        "Climate-controlled storage unit suitable for inventory or equipment. Loading dock access.",
      features: ["climate-control", "loading-dock", "security-cameras", "24/7-access"],
      images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"],
      ownerId: user.id,
    },
    {
      type: PropertyType.APARTMENT,
      tags: [PropertyTag.NEEDS_REPAIR, PropertyTag.VACANT],
      address: "Allenby Street 203",
      city: "Tel Aviv",
      country: "IL",
      bedrooms: 1,
      bathrooms: 1.0,
      area: 42.0,
      floor: 3,
      yearBuilt: 1970,
      purchaseDate: new Date("2022-08-15"),
      purchasePrice: 1250000,
      monthlyRent: null,
      description:
        "Studio apartment in need of renovation. Great investment opportunity in prime location near the beach.",
      features: ["balcony"],
      images: ["https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800"],
      ownerId: user.id,
    },
    {
      type: PropertyType.COMMERCIAL,
      tags: [PropertyTag.RENTED],
      address: "High-Tech Park, Building C",
      city: "Herzliya",
      country: "IL",
      bedrooms: null,
      bathrooms: 4.0,
      area: 350.0,
      floor: 5,
      yearBuilt: 2019,
      purchaseDate: new Date("2020-12-01"),
      purchasePrice: 5800000,
      monthlyRent: 18500,
      description:
        "Modern office space in premium high-tech park. Open floor plan with meeting rooms and kitchen facilities.",
      features: [
        "elevator",
        "parking",
        "air-conditioning",
        "kitchen",
        "meeting-rooms",
        "server-room",
        "fiber-optic",
      ],
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800",
      ],
      ownerId: user.id,
    },
  ];

  console.log("Creating properties...");

  for (const propertyData of properties) {
    const property = await prisma.property.create({
      data: propertyData,
    });
    console.log(`✓ Created ${property.type} at ${property.address}, ${property.city}`);
  }

  console.log("\n🎉 Seed completed successfully!");
  console.log(`Created ${properties.length} properties for user ${user.email}`);
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
