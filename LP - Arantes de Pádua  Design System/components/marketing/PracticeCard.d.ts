import * as React from "react";

export interface PracticeCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Lucide (or any) icon node, rendered in emerald. */
  icon?: React.ReactNode;
  /** Practice-area name. */
  title?: string;
  /** Short description. */
  description?: string;
  /** Optional 1-based index shown as a faint serif numeral. */
  index?: number;
}

/**
 * Practice-area card — icon, title, copy, hover lift.
 * @startingPoint section="Marketing" subtitle="Practice-area cards grid" viewport="700x320"
 */
export function PracticeCard(props: PracticeCardProps): JSX.Element;
