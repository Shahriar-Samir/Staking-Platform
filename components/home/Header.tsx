import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import DropdownMenuCheckboxes from "./dropdown";
import { Button } from "../ui/button";
import RadiogroupComponent from "./radiogroup";

const Header = () => {
  return (
    <section className="flex justify-between w-full mt-5">
      <div className="">
        <SidebarTrigger />
        <div className="flex gap-1">
          <DropdownMenuCheckboxes />
          <Button asChild>
            <button className="bg-[#00af91] text-black dark:text-white hover:bg-[#125a4e]">
              Analyse
            </button>
          </Button>
        </div>
        <RadiogroupComponent />
      </div>
      <div className="flex flex-col gap-2">
        <Button asChild>
          <button className="bg-[#00af91] text-black dark:text-white hover:bg-[#125a4e]">
            Connect Wallet
          </button>
        </Button>
        <Button asChild>
          <button className="bg-[#00af91] text-black dark:text-white hover:bg-[#125a4e]">
            Login UNS Domains
          </button>
        </Button>
      </div>
    </section>
  );
};

export default Header;
