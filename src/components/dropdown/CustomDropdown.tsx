import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomDropdownProps {
  options?: string[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  color?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options = [
    "Accident history",
    "Frame or structural damage",
    "Damage location",
    "Weather damage",
    "Repair estimates and costs"
  ],
  value,
  onValueChange,
  className,
  placeholder = "Vehicle Damage",
  icon,
  color = "#52489c"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    if (onValueChange) {
      onValueChange(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 w-full" ref={dropdownRef}>
      {/* Select trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "z-20 flex items-center justify-between p-3 md:p-4 bg-gray-100 rounded-full w-full border-tertiary !border-opacity-20",
          !isOpen && '!border',
          className
        )}
      >
        <div className="flex items-center gap-3">
          <div className=" text-white p-3 md:p-4 rounded-full flex items-center justify-center w-16 h-16" style={{backgroundColor: color}}>
            {icon || (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 19V9M18 19V9M10 19V9M14 19V9M4 5L20 5M2 19H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
          </div>
          <span className="font-semibold text-xl">
            {value || placeholder}
          </span>
        </div>
        <ChevronDown className={cn("w-6 md:w-8 h-6 md:h-8 transition-transform", isOpen ? "transform rotate-180" : "")} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-1/2 bg-white rounded-b-xl shadow-md -z-10 pt-12 py-4 ">
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "px-6 py-3 text-md font-light cursor-pointer hover:bg-gray-100 transition-all duration-300",
                value === option ? "font-semibold" : ""
              )}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;