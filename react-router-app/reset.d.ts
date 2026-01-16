// Do not add any other lines of code to this file!

import "@total-typescript/ts-reset/dom";
import "react";

declare module "react" {
  // eslint-disable-next-line ts/consistent-indexed-object-style
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
