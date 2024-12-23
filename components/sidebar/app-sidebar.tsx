"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import for detecting the current path
import Summary from "./icons/Summary";
import Tokens from "./icons/Tokens";
import Pools from "./icons/Pools";
import Transactions from "./icons/Transactions";
import Swap from "./icons/Swap";
import BuyCrypto from "./icons/BuyCrypto";
import { Switch } from "../ui/switch";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const [themeText, setThemeText] = useState("Light");
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    setThemeText(theme === "dark" ? "Dark" : "Light");
  }, [theme]);

  const toggleTheme = (status: boolean) => {
    const newTheme = status ? "dark" : "light";
    setTheme(newTheme);
    setThemeText(newTheme === "dark" ? "Dark" : "Light");
  };

  const links = [
    { name: "Summary", link: "/", icon: <Summary /> },
    { name: "Tokens", link: "/tokens", icon: <Tokens /> },
    { name: "Pools", link: "/pools", icon: <Pools /> },
    {
      name: "Wallet Analytics",
      link: "/wallet-analytics",
      icon: <Transactions />,
    },
    { name: "Swap", link: "/swap-interface", icon: <Swap /> },
    { name: "Buy Crypto", link: "/buy-crypto", icon: <BuyCrypto /> },
  ];

  return (
    <Sidebar>
      <div className="w-full h-full flex flex-col items-center border-e shadow-xl dark:border-0 dark:shadow-[#00af91]">
        <Image
          width={250}
          height={250}
          alt="Multify Logo"
          className="h-[150px] w-[150px] object-contain mt-5"
          src="/images/multifylogo.png"
        />

        <ul className="w-full flex flex-col mt-5">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className={`flex items-center ps-[25%] hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold text-md w-full transition-all py-2 gap-2 ${
                  pathname === item.link
                    ? "bg-gray-200 dark:bg-gray-700 font-bold" // Apply active styles
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center mt-4 gap-3 rounded-full border-2 p-3 border-[#00af91] font-semibold text-sm shadow-md dark:border-0 dark:shadow-[#00af91]">
          <h1>{themeText}</h1>
          <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </Sidebar>
  );
}
