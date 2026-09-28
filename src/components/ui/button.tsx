import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary", primary: "btn-primary", secondary: "btn-secondary",
      outline: "btn-secondary", ghost: "btn-ghost", danger: "btn-danger", destructive: "btn-danger", link: "btn-ghost",
    },
    size: { default: "btn-md", md: "btn-md", sm: "btn-sm", lg: "btn-md", icon: "btn-icon", "icon-sm": "btn-icon", "icon-lg": "btn-icon" },
  },
  defaultVariants: { variant: "secondary", size: "default" },
});
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";
