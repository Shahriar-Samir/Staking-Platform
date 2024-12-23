"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropdownMenuRadios() {
  const [selectedValue, setSelectedValue] = React.useState("Ethereum");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedValue}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select an option</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedValue}
          onValueChange={setSelectedValue}
        >
          <DropdownMenuRadioItem value="Ethereum">
            Ethereum
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Polygon">Polygon</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Avalanche">
            Avalanche
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Binance">Polygon</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Moonbeam">
            Moonbeam
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Arbitrum">
            Arbitrum
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Fantom">Fantom</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuRadios;
