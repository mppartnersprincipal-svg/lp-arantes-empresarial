import * as React from "react";

export interface MetalDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional centered label flanked by two metallic rules. */
  label?: string;
}

/** Metallic hairline divider echoing the logo's ADVOGADOS rule. */
export function MetalDivider(props: MetalDividerProps): JSX.Element;
