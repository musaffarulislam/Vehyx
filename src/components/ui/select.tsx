import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Define proper types for the Select component
interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  className?: string;
  children?: React.ReactNode;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(({ className, children, ...props }, ref) => {
  // Split children into trigger content and dropdown content if there are multiple children
  let triggerContent = children;
  let dropdownContent = null;
  
  if (React.Children.count(children) > 1) {
    const childrenArray = React.Children.toArray(children);
    triggerContent = childrenArray[0];
    dropdownContent = childrenArray[1];
  }

  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex items-center justify-between px-4 py-2 border rounded-2xl bg-white text-sm shadow-md w-full",
          "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300",
          className
        )}
      >
        {triggerContent}
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </SelectPrimitive.Trigger>
      
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="w-full border rounded-xl bg-white shadow-md mt-2">
          <SelectPrimitive.Viewport className="py-2">
            {dropdownContent}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

Select.displayName = "Select";

export { Select };