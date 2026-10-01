export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  id: string;
  /** Hidden visually in the design; kept for screen readers. */
  heading?: string;
  links: readonly FooterLink[];
};

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    id: "browse",
    heading: "Browse",
    links: [
      { label: "Featured Courses", href: "#courses" },
      { label: "Featured Categories", href: "#courses" },
      { label: "Business", href: "#" },
      { label: "IT", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    id: "categories",
    links: [
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    id: "platform",
    heading: "Platform",
    links: [
      { label: "Become a Creator", href: "#creators" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];