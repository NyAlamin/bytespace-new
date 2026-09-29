import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-[46px] items-center justify-center rounded-3xl bg-electric-lime-400 px-6 text-[18px] font-medium leading-[1.2] text-shuttle-gray-950 transition hover:brightness-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}