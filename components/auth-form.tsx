'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2, Mail, Lock, Loader2, Chrome } from 'lucide-react';
import { supabase } from '@/lib/clients/supabase';
import {
    loginSchema,
    signupSchema,
    type LoginInput,
    type SignupInput,
} from '@/lib/validations/auth-schema';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from '@/i18n/routing';
import { defaultLocale } from '@/i18n/config';

export function AuthForm() {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const router = useRouter();
    const locale = useLocale();
    const { toast } = useToast();

    const homeHref = locale === defaultLocale ? '/' : `/${locale}`;

    const isLogin = mode === 'login';

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginInput | SignupInput>({
        resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    });

    const toggleMode = () => {
        setMode(isLogin ? 'signup' : 'login');
        reset();
    };

    const onSubmit = async (data: LoginInput | SignupInput) => {
        setIsLoading(true);

        try {
            if (isLogin) {
                const { email, password } = data as LoginInput;
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;

                toast({
                    title: 'Welcome back!',
                    description: 'Successfully signed in to your account.',
                });
                router.push('/');
            } else {
                const { email, password } = data as SignupInput;
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                });

                if (error) throw error;

                toast({
                    title: 'Account created!',
                    description: 'Your account has been successfully created.',
                });
                router.push('/');
            }
        } catch (error) {
            const message =
                error instanceof Error ? error.message : 'An error occurred. Please try again.';
            toast({
                variant: 'destructive',
                title: 'Authentication failed',
                description: message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);

        try {
            const redirectTo = `${window.location.origin}${homeHref}`;
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo,
                },
            });

            if (error) throw error;
            // On success, Supabase redirects away; loading state will unmount. Reset on error or if user returns.
        } catch (error) {
            const message =
                error instanceof Error ? error.message : 'An error occurred. Please try again.';
            toast({
                variant: 'destructive',
                title: 'Google sign-in failed',
                description: message,
            });
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md shadow-xl border-slate-200">
            <CardHeader className="space-y-3 text-center">
                <div className="flex justify-center mb-2">
                    <div className="p-3 bg-slate-100 rounded-full">
                        <Building2 className="h-8 w-8 text-slate-700" />
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                    {isLogin ? 'Welcome back' : 'Create your account'}
                </CardTitle>
                <CardDescription className="text-slate-600">
                    {isLogin
                        ? 'Sign in to access your property management dashboard'
                        : 'Get started with your property management platform'}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 border-slate-300 hover:bg-slate-50"
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading || isLoading}
                >
                    {isGoogleLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Chrome className="mr-2 h-4 w-4" />
                    )}
                    Continue with Google
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">
                            Email address
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                className="pl-10 h-11 border-slate-300 focus:border-slate-500"
                                disabled={isLoading}
                                {...register('email')}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-slate-700">
                            Password
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="pl-10 h-11 border-slate-300 focus:border-slate-500"
                                disabled={isLoading}
                                {...register('password')}
                            />
                        </div>
                        {errors.password && (
                            <p className="text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    {!isLogin && (
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-slate-700">
                                Confirm password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="pl-10 h-11 border-slate-300 focus:border-slate-500"
                                    disabled={isLoading}
                                    {...register('confirmPassword')}
                                />
                            </div>
                            {'confirmPassword' in errors && errors.confirmPassword && (
                                <p className="text-sm text-red-600">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                    )}

                    {isLogin && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white"
                        disabled={isLoading || isGoogleLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {isLogin ? 'Signing in...' : 'Creating account...'}
                            </>
                        ) : isLogin ? (
                            'Sign in'
                        ) : (
                            'Create account'
                        )}
                    </Button>
                </form>

                <div className="text-center text-sm text-slate-600">
                    {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    <button
                        type="button"
                        onClick={toggleMode}
                        className="font-semibold text-slate-900 hover:underline"
                        disabled={isLoading || isGoogleLoading}
                    >
                        {isLogin ? 'Create account' : 'Sign in'}
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
