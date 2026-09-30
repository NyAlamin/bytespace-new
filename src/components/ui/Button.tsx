import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const BUTTON_STYLES =
  "inline-flex h-[46px] items-center justify-center rounded-3xl bg-electric-lime-400 px-6 text-[18px] font-medium leading-[1.2] text-shuttle-gray-950 transition hover:brightness-95";

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
      className={`${BUTTON_STYLES} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${BUTTON_STYLES} ${className}`}>
      {children}
    </Link>
  );
}