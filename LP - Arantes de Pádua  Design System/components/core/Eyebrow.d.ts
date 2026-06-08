import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the leading metallic tick. */
  tick?: boolean;
  /** Flips color to platinum on emerald surfaces. */
  surface?: "light" | "dark";
  children?: React.ReactNode;
}

/** Tracked Jost label above headings, echoing the wordmark. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
