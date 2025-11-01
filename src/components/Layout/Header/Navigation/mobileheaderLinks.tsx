/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";
import { headerItem } from "@/types/menu";

export const MobileheaderLinks: React.FC<{ item: headerItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };
  return (
    <div className="relative w-full">
      <div
        className="flex items-center justify-between w-full py-2 text-white cursor-pointer"
        onClick={handleToggle}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width="22"
            height="22"
            className={`transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          submenuOpen ? "max-h-96 opacity-100" : " max-h-0 opacity-0"
        }`}
      >
        {item.submenu?.map((subItem, index) => (
          <Link
            key={index}
            href={subItem.href}
            className="block px-4 py-2 text-midnight_text bg-white hover:bg-midnight_text hover:text-white ps-3"
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
