import DropdownMenuCheckboxes from "@/components/home/dropdown";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TransactionHistory = () => {
  return (
    <main className="w-10/12 mx-auto mt-10">
      <header>
        <h1 className="uppercase text-xl font-semibold">Transaction history</h1>
        <h2 className="uppercase text-base mt-2">Overview</h2>
      </header>
      <section className="flex gap-2 max-w-[500px] mx-auto">
        <Input placeholder="Account Address" />
        <DropdownMenuCheckboxes />
        <Button asChild>
          <button className="!border-2 !border-[#00af91] !bg-transparent !text-black hover:!bg-[#125a4e] hover:!text-white dark:!text-white dark:!bg-[#125a4e] dark:hover:!bg-transparent dark:hover:!text-white">
            Analyse
          </button>
        </Button>
      </section>
      <Table className="mt-10 border-2 border-[#00af91] ">
        <TableHeader className="border-2 border-[#00af91] ">
          <TableRow>
            <TableHead className="uppercase text-black dark:text-white">
              TX HASH
            </TableHead>
            <TableHead className="uppercase text-black dark:text-white">
              Last signed blocks
            </TableHead>
            <TableHead className="uppercase text-black dark:text-white">
              From address - to address
            </TableHead>
            <TableHead className="uppercase text-black dark:text-white">
              Value
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default TransactionHistory;
