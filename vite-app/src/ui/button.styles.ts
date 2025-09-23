import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
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
