import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger"; size?: "sm" | "md" | "icon" };
export const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant = "secondary", size = "md", ...props }, ref) => (
  <button ref={ref} className={cn("btn", `btn-${variant}`, `btn-${size}`, className)} {...props} />
));
Button.displayName = "Button";
