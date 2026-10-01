"use client";

import { useState, type FormEvent } from "react";
import { AuthField } from "@/components/ui/AuthField";
import { Button } from "@/components/ui/Button";
import { getFieldErrors, signupSchema } from "@/lib/validation/auth";

type SignupField = "fullName" | "email" | "password";
type SignupErrors = Partial<Record<SignupField, string>>;

function readField(data: FormData, name: SignupField): string {
  return String(data.get(name) ?? "");
}

export function SignupForm() {
  const [errors, setErrors] = useState<SignupErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const result = signupSchema.safeParse({
      fullName: readField(data, "fullName"),
      email: readField(data, "email"),
      password: readField(data, "password"),
    });

    if (!result.success) {
      setErrors(getFieldErrors<SignupField>(result.error));
      return;
    }

    setErrors({});
    // UI only: there is no backend in this project.
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-[453px] flex-col items-end gap-6"
    >
      <AuthField
        label="Full Name"
        name="fullName"
        placeholder="Jamie Davis"
        autoComplete="name"
        error={errors.fullName}
      />
      <AuthField
        label="Email"
        name="email"
        type="email"
        placeholder="designer@example.com"
        autoComplete="email"
        error={errors.email}
      />
      <AuthField
        label="Password"
        name="password"
        type="password"
        placeholder="********"
        autoComplete="new-password"
        error={errors.password}
      />
      <Button type="submit">Continue</Button>
    </form>
  );
}