import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";

const RadiogroupComponent = () => {
  return (
    <div className="mt-5">
      <RadioGroup defaultValue="option-one" asChild>
        <div className="!w-full  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-3 gap-5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="uppercase">
              Uniswap
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two" className="uppercase">
              sushiswap
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three" className="uppercase">
              quickswap
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four" />
            <Label htmlFor="option-four" className="uppercase">
              traderjoe
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-five" id="option-five" />
            <Label htmlFor="option-five" className="uppercase">
              pancakeswap
            </Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadiogroupComponent;
