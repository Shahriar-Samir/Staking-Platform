"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Summary from "./icons/Summary";
import Tokens from "./icons/Tokens";
import Pools from "./icons/Pools";
import Transactions from "./icons/Transactions";
import Swap from "./icons/Swap";
import BuyCrypto from "./icons/BuyCrypto";
import { Switch } from "../ui/switch";

export function AppSidebar() {
  const { setTheme } = useTheme();
  const [themeText, setThemeText] = useState("");
  const toggleTheme = (status: boolean) => {
    status ? setTheme("dark") : setTheme("light");
    status ? setThemeText("Dark") : setThemeText("Light");
  };

  useEffect(() => {
    setThemeText(localStorage.getItem("theme") === "light" ? "Light" : "Dark");
  }, []);

  const links = [
    {
      name: "Summary",
      link: "/",
      icon: <Summary />,
    },
    {
      name: "Tokens",
      link: "/tokens",
      icon: <Tokens />,
    },
    {
      name: "Pools",
      link: "/pools",
      icon: <Pools />,
    },
    {
      name: "Wallet Analytics",
      link: "/wallet-analytics",
      icon: <Transactions />,
    },
    {
      name: "Swap",
      link: "/",
      icon: <Swap />,
    },
    {
      name: "Buy Crypto",
      link: "/",
      icon: <BuyCrypto />,
    },
  ];
  return (
    <Sidebar>
      <div className="w-full h-full flex items-center  flex-col border-e shadow-xl ">
        <Image
          width={250}
          height={250}
          alt="title"
          className="h-[150px] w-[150px] object-contain mt-5"
          src="/images/multifylogo.png"
        />
        <ul className="w-full flex flex-col mt-5">
          {links.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="flex ps-[25%] items-center hover:bg-gray-100 font-semibold text-lg w-full transition-all py-2 gap-2"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center mt-4 gap-3">
          <h1>{themeText}</h1>
          <Switch
            onCheckedChange={toggleTheme}
            checked={themeText === "Dark" ? true : false}
          />
        </div>
      </div>
    </Sidebar>
  );
}
