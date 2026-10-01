import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "#courses", active: false },
  { label: "Creators", href: "#creators", active: false },
] as const;

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="relative mx-auto h-[120px] w-[1440px]">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="absolute left-[122px] top-[35px] h-[37px] w-[171px]"
        >
          <Image
            src="/images/brand/logo-mark.png"
            alt=""
            width={29}
            height={32}
            priority
            className="absolute left-0 top-0 h-[31.5px] w-[28.88px]"
          />
          <span className="absolute left-[37px] top-[7px] font-clash text-[24px] font-bold leading-[30px] text-shuttle-gray-50">
            ByteSpace
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-[calc(50%-105.5px)] top-[47px] flex h-[26px] items-center gap-6 text-[16px] text-shuttle-gray-50"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active ? "font-medium leading-[1.2]" : "leading-[1.6]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-[122px] top-[48px] flex h-6 items-center gap-6 text-[16px] leading-6 text-shuttle-gray-50">
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Join Us</Link>
          <button type="button" aria-label="Cart" className="size-6">
            <ShoppingBag size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}