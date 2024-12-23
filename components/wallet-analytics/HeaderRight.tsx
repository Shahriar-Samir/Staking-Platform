"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";
import Transactions from "../sidebar/icons/Transactions";

const HeaderRight = () => {
  const { setTheme } = useTheme();
  const [themeText, setThemeText] = useState("");
  const toggleTheme = (status: boolean) => {
    status ? setTheme("dark") : setTheme("light");
    status ? setThemeText("Dark") : setThemeText("Light");
  };

  useEffect(() => {
    setThemeText(localStorage.getItem("theme") === "light" ? "Light" : "Dark");
  }, []);
  return (
    <section className="flex justify-center gap-2">
      <div className="gap-2 hidden md:flex">
        <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
          Login UNS Domains
        </Button>
        <Button className="!border-2 !border-[#4B47EE] !bg-transparent !text-black hover:!bg-[#4B47EE] hover:!text-white dark:!text-white dark:!bg-transparent dark:hover:!bg-[#4B47EE] dark:hover:!text-white">
          <Transactions /> Connect Wallet
        </Button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <h1>{themeText}</h1>
        <Switch
          onCheckedChange={toggleTheme}
          checked={themeText === "Dark" ? true : false}
        />
      </div>
    </section>
  );
};

export default HeaderRight;
