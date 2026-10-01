import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from "@/data/footer";

export function Footer() {
  return (
    <footer className="relative h-[525px] w-full bg-white">
      {/* Full-width top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-px h-px bg-shuttle-gray-200"
      />

      <div className="relative mx-auto h-full w-[1440px]">
        <div className="absolute left-[120px] top-[71px] flex w-[1200px] flex-col gap-[130px]">
          <div className="flex h-[234px] w-[1200px] items-start gap-[92px]">
            <div className="flex w-[528px] flex-col gap-[45px]">
              <div className="flex flex-col gap-4">
                <Link href="/" aria-label="ByteSpace home" className="w-fit">
                  <Logo />
                </Link>
                <p className="w-[528px] text-[14px] leading-[22px] text-shuttle-gray-950">
                  Stay Up to date with our latest features and releases by
                  joining our newsletter.
                </p>
              </div>

              <div className="flex w-[504px] flex-col gap-6">
                <NewsletterForm />
                <p className="w-[504px] text-[12px] leading-[19px] text-shuttle-gray-950">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>
            </div>

            <nav
              aria-label="Footer"
              className="flex h-[222px] w-[580px] items-end gap-10"
            >
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.id} className="w-[167px]">
                  {column.heading && (
                    <h2 className="sr-only">{column.heading}</h2>
                  )}
                  <ul className="flex flex-col gap-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block text-[14px] leading-[22px] text-shuttle-gray-950 hover:text-persian-blue-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex w-[1200px] flex-col gap-6">
            <div className="relative h-0 w-full">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-shuttle-gray-200"
              />
            </div>
            <div className="flex w-[1200px] items-start justify-between">
              <p className="text-[12px] leading-[19px] text-shuttle-gray-950">
                @ 2023 ByteSpace. All rights reserved.
              </p>
              <ul className="flex items-start gap-6">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-[12px] leading-[19px] text-shuttle-gray-950 hover:text-persian-blue-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}