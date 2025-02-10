import { type VariantProps, cva } from "#src/lib/css.ts";

const buttonVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      solid: "",
      outline: "",
    },
    palette: {
      primary: "",
      secondary: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    variant: "outline",
    palette: "primary",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ComponentProps<"button">,
    ButtonVariants {}

export function Button({
  className,
  palette,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ className, palette, size, variant })}
      {...props}
    />
  );
}
