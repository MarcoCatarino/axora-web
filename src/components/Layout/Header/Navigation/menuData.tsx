import { headerItem } from "@/types/menu";

export const headerData: headerItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "#",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Services List", href: "/services" },
      { label: "Services Details", href: "/services/" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Portfolio Details", href: "/portfolio/" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "Services Details", href: "/blog/" },
    ],
  },
  // { label: "Contact", href: "/contact" },
];
