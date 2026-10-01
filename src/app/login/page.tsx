import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialLogin } from "@/components/ui/SocialLogin";

export const metadata: Metadata = {
  title: "Sign in | ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex h-[683px] w-[453px] flex-col items-center justify-between">
        <div className="flex w-[453px] flex-col gap-10">
          <div>
            <p className="text-[18px] leading-[1.6] text-persian-blue-800">
              Sign In
            </p>
            <h1 className="font-heading text-[44px] font-semibold leading-[1.2] text-shuttle-gray-950">
              Welcome Back
            </h1>
          </div>
          <LoginForm />
        </div>

        <SocialLogin />

        <p className="flex gap-1 text-[16px] leading-[1.6]">
          <span className="text-black-400">New user?</span>
          <Link href="/signup" className="text-persian-blue-800">
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}