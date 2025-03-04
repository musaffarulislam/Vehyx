"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

const SelectForm = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "relative flex h-12 w-full rounded-lg border border-black bg-transparent px-3 py-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-platinum disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:ring-0 focus-visible:outline-none before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent before:bg-gradient-to-r before:from-[#281F68] before:to-[#52489C] before:opacity-0 before:transition-opacity before:duration-300 focus-visible:before:opacity-100",
            className
          )}
          {...props}
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-black">
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700 pointer-events-none" />
      </div>
    );
  }
);

SelectForm.displayName = "SelectForm";

export { SelectForm };
