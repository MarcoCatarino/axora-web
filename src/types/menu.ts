export type SubmenuItem = {
  label: string;
  href: string;
};

export type headerItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};
