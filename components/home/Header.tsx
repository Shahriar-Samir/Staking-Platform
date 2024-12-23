import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import DropdownMenuCheckboxes from "./dropdown";
import { Button } from "../ui/button";
import RadiogroupComponent from "./radiogroup";
import Transactions from "../sidebar/icons/Transactions";
import Image from "next/image";

const Header = () => {
  return (
    <section className="w-full">
      <section className="flex justify-between items-center w-full mt-5">
        <div className="">
          <div className="flex items-center">
            <SidebarTrigger className="md:hidden" />
            <Image
              width={250}
              height={250}
              alt="title"
              className="md:hidden h-[60px] w-[60px] object-contain "
              src="/images/multifylogo.png"
            />
          </div>
          <div className="gap-1 mt-1 hidden md:flex">
            <DropdownMenuCheckboxes />
            <Button asChild>
              <button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
                Analyse
              </button>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button asChild>
            <button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
              <Transactions />
              Connect Wallet
            </button>
          </Button>
          <Button asChild>
            <button className="!border-2 !border-[#4B47EE] !bg-transparent !text-black hover:!bg-[#4B47EE] hover:!text-white dark:!text-white dark:!bg-transparent dark:hover:!bg-[#4B47EE] dark:hover:!text-white">
              Login UNS Domains
            </button>
          </Button>
        </div>
      </section>
      <section className="mt-5 w-full !max-w-[500px] md:!max-w-full mx-auto">
        <div className="flex gap-1 mt-1 md:hidden">
          <DropdownMenuCheckboxes />
          <Button asChild>
            <button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
              Analyse
            </button>
          </Button>
        </div>
        <RadiogroupComponent />
      </section>
    </section>
  );
};

export default Header;
