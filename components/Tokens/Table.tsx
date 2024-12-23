import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableComp = () => {
  return (
    <section className="mt-10">
      <Table className="p-4 !rounded-xl border">
        <TableHeader className="bg-gray-100">
          <TableRow className="">
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Liquidity</TableHead>
            <TableHead className="font-semibold">Volume(24H)</TableHead>
            <TableHead className="font-semibold">Volume(24H)</TableHead>
            <TableHead className="font-semibold">Swap(24H)</TableHead>
            <TableHead className="font-semibold">Fees(24H)</TableHead>
            <TableHead className="font-semibold">%Fees(Yearly)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default TableComp;
