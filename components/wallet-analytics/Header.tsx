"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";
import Summary from "../sidebar/icons/Summary";
import BuyCrypto from "../sidebar/icons/BuyCrypto";
import Swap from "../sidebar/icons/Swap";
import Transactions from "../sidebar/icons/Transactions";

const Header = () => {
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
    <header className="mx-auto w-10/12 py-4 px-4 bg-slate-300 rounded-md shadow-lg flex justify-between items-center">
      <div className="gap-2 flex justify-center">
        <Button>
          <Swap /> Home
        </Button>
        <Button>
          <Transactions /> Transactions
        </Button>
        <Button>
          <Swap /> Swap
        </Button>
        <Button>
          <BuyCrypto /> Buy Crypto
        </Button>
      </div>
      <section className="flex justify-center gap-2">
        <Button>Login UNS Domains</Button>
        <Button>Connect Wallet</Button>
        <div className="flex justify-center items-center gap-3">
          <h1>{themeText}</h1>
          <Switch
            onCheckedChange={toggleTheme}
            checked={themeText === "Dark" ? true : false}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
