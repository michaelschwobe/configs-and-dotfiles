import { type VariantProps, defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export { type VariantProps };

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
