import { AuthForm } from '@/components/auth-form';

export default function AuthPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-100 px-4">
            <div className="w-full max-w-md">
                <AuthForm />
            </div>
        </div>
    );
}
