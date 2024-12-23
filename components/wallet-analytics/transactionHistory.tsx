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
        <Input />
        <DropdownMenuCheckboxes />
        <Button className="uppercase">Analyse</Button>
      </section>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="uppercase">TX HASH</TableHead>
            <TableHead className="uppercase">Last signed blocks</TableHead>
            <TableHead className="uppercase">
              From address - to address
            </TableHead>
            <TableHead className="uppercase">Value</TableHead>
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
