import * as React from "react";

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric, e.g. "+15 anos" or "98%". */
  value?: React.ReactNode;
  /** Tracked uppercase caption. */
  label?: string;
  /** Surface it sits on. */
  surface?: "light" | "dark";
  align?: "left" | "center";
}

/** Proof-point metric — big serif numeral + tracked label. */
export function StatBlock(props: StatBlockProps): JSX.Element;
