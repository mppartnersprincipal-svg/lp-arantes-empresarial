import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = solid emerald, `metal` = platinum sheen, `outline` = hairline, `ghost` = text-only. */
  variant?: "primary" | "metal" | "outline" | "ghost";
  /** Padding / type scale. */
  size?: "sm" | "md" | "lg";
  /** Which surface the button sits on — flips outline/ghost colors for legibility on emerald. */
  surface?: "light" | "dark";
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Render as a different element, e.g. "a" for links. */
  as?: "button" | "a";
  children?: React.ReactNode;
}

/**
 * Primary action button. Editorial, near-square, Jost uppercase label.
 * @startingPoint section="Core" subtitle="Buttons — primary, metal, outline, ghost" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
