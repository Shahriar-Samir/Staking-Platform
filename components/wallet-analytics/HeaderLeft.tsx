import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Swap from "../sidebar/icons/Swap";
import Transactions from "../sidebar/icons/Transactions";
import BuyCrypto from "../sidebar/icons/BuyCrypto";
import { AlignLeft } from "lucide-react";
import Link from "next/link";

const HeaderLeft = () => {
  return (
    <div>
      <NavigationMenu className="xl:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AlignLeft />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[200px] p-2 flex flex-col gap-2">
              <Link href="/">
                <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white w-full">
                  <Swap /> Home
                </Button>
              </Link>
              <Link href="/wallet-analytics">
                <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white w-full">
                  <Transactions /> Transactions
                </Button>
              </Link>
              <Link href="/swap-interface">
                <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white w-full">
                  <Swap /> Swap
                </Button>
              </Link>
              <Link href="/buy-crypto">
                <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white w-full">
                  <BuyCrypto /> Buy Crypto
                </Button>
              </Link>
              <div className="flex flex-col md:hidden gap-2">
                <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
                  Login UNS Domains
                </Button>
                <Button className="!border-2 !border-[#4B47EE] !bg-transparent !text-black hover:!bg-[#4B47EE] hover:!text-white dark:!text-white dark:!bg-transparent dark:hover:!bg-[#4B47EE] dark:hover:!text-white">
                  <Transactions /> Connect Wallet
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="gap-2 justify-center hidden xl:flex">
        <Link href="/">
          <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
            <Swap /> Home
          </Button>
        </Link>
        <Link href="/wallet-analytics">
          <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
            <Transactions /> Transactions
          </Button>
        </Link>

        <Link href="/swap-interface">
          <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
            <Swap /> Swap
          </Button>
        </Link>
        <Link href="/buy-crypto">
          <Button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
            <BuyCrypto /> Buy Crypto
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLeft;
