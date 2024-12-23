import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const TableComp = () => {
  return (
    <section className="mt-10 w-full max-w-[500px] md:max-w-[1200px] mx-auto">
      <h1 className="text-2xl text-center font-medium">Tokens Analytics</h1>
      <h2 className="text-lg text-center mt-2 text-[#00AF91]">Overview</h2>
      <Table className="mt-5 !p-4  shadow-lg border-2 border-[#01AF8A] ">
        <TableHeader className="border-2 border-[#01AF8A] dark:!text-white dark:bg-[#125a4e]">
          <TableRow className="">
            <TableHead className="font-semibold dark:text-white">
              Name
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              Liquidity
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              Volume(24H)
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              Volume(24H)
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              Swap(24H)
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              Fees(24H)
            </TableHead>
            <TableHead className="font-semibold dark:text-white">
              %Fees(Yearly)
            </TableHead>
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
