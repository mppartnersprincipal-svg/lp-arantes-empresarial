import * as React from "react";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Uppercase Jost label above the control. */
  label?: string;
  /** Input type when not a textarea. */
  type?: string;
  /** Render a multi-line textarea instead of an input. */
  textarea?: boolean;
  /** Rows for textarea mode. */
  rows?: number;
  /** Helper text below the control. */
  hint?: string;
  required?: boolean;
}

/** Labelled text input or textarea, ivory fill + emerald focus ring. */
export function Field(props: FieldProps): JSX.Element;
