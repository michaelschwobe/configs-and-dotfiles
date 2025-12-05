import { buttonVariants, type ButtonVariants } from "./button.styles.ts";

export type ButtonRef = React.Ref<React.ComponentRef<"button">>;

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">, ButtonVariants {}

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
      className={buttonVariants({ className, size, palette, variant })}
      {...props}
    />
  );
}
