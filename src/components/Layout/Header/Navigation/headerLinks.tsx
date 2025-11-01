/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { headerItem } from "../../../../types/menu";

const HeaderLinks: React.FC<{ item: headerItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handlemouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <>
      <div className="relative group">
        <Link
          href={item.href}
          className={`text-base font-normal flex items-center hover:shadow-dark-blur ${
            path === item.href ? "text-white hover:text-white" : "text-white"
          }`}
        >
          {item.label}

          {item.submenu && (
            <Icon
              icon="iconamoon:arrow-down-2-duotone"
              className="ml-1 transition-transform duration-300 group-hover:rotate-180"
              width="22"
              height="22"
            />
          )}
        </Link>

        {item.submenu && (
          <div
            className={`absolute left-0 top-10 rounded-lg mt-1 w-60 bg-white shadow-lg overflow-hidden opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300`}
          >
            {item.submenu.map((subItem: any, index: number) => (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-4 py-2 transition ${
                  path === subItem.href
                    ? "text-white bg-dark"
                    : "text-midnight_text hover:bg-dark hover:text-white"
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderLinks;
