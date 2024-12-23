import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const RadiogroupComponent = () => {
  return (
    <div>
      <RadioGroup defaultValue="option-one" asChild>
        <div className="grid-cols-5 mt-3 gap-5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four" />
            <Label htmlFor="option-four">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-five" id="option-five" />
            <Label htmlFor="option-five">Option Two</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadiogroupComponent;
