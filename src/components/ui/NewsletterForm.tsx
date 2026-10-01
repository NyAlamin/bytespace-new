"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI only: there is no newsletter backend in this project.
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-[504px] items-start gap-6">
      <label className="block">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="h-[52px] w-[376px] rounded-full border border-solid border-shuttle-gray-200 bg-white px-6 text-[16px] leading-[1.6] text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-950 focus-visible:border-persian-blue-800"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}