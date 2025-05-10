import { type VariantProps, cva } from "#src/lib/css.ts";

export const buttonVariants = cva({
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
