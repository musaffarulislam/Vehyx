'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showPasswordToggle?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showPasswordToggle, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-platinum bg-transparent px-3 py-6 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-platinum focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            showPasswordToggle && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {showPasswordToggle && type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }