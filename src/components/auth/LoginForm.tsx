"use client";

import { useState, type FormEvent } from "react";
import { AuthField } from "@/components/ui/AuthField";
import { Button } from "@/components/ui/Button";
import { getFieldErrors, loginSchema } from "@/lib/validation/auth";

type LoginField = "email" | "password";
type LoginErrors = Partial<Record<LoginField, string>>;

function readField(data: FormData, name: LoginField): string {
  return String(data.get(name) ?? "");
}

export function LoginForm() {
  const [errors, setErrors] = useState<LoginErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const result = loginSchema.safeParse({
      email: readField(data, "email"),
      password: readField(data, "password"),
    });

    if (!result.success) {
      setErrors(getFieldErrors<LoginField>(result.error));
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
        autoComplete="current-password"
        error={errors.password}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
}