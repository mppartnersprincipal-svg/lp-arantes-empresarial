import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. */
  tone?: "neutral" | "emerald" | "metal";
  /** Surface it sits on. */
  surface?: "light" | "dark";
  children?: React.ReactNode;
}

/** Small tracked category / status pill. */
export function Badge(props: BadgeProps): JSX.Element;
