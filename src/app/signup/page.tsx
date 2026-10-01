import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign up | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex w-[453px] flex-col items-center gap-[122px]">
        <div className="flex w-[453px] flex-col gap-10">
          <div>
            <p className="text-[18px] leading-[1.6] text-persian-blue-800">
              Create an Account
            </p>
            <h1 className="font-heading text-[44px] font-semibold leading-[1.2] text-shuttle-gray-950">
              Welcome to
              <br />
              ByteSpace
            </h1>
          </div>
          <SignupForm />
        </div>

        <p className="flex gap-1 text-[16px] leading-[1.6]">
          <span className="text-shuttle-gray-700">Already have an account?</span>
          <Link href="/login" className="text-persian-blue-800">
            Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}