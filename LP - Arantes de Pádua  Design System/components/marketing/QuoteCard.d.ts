import * as React from "react";

export interface QuoteCardProps extends React.HTMLAttributes<HTMLQuoteElement> {
  /** The testimonial text. */
  quote?: string;
  /** Attribution name. */
  author?: string;
  /** Attribution role / company. */
  role?: string;
  /** Surface it sits on. */
  surface?: "light" | "dark";
}

/** Client testimonial / pull quote in italic serif with metallic quote mark. */
export function QuoteCard(props: QuoteCardProps): JSX.Element;
