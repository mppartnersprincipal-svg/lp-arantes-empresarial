import React from "react";

/**
 * Badge — small status / category pill. Restrained, no loud colors.
 */
export function Badge({ tone = "neutral", surface = "light", children, style, ...rest }) {
  const tones = {
    neutral: surface === "dark"
      ? { background: "rgba(240,241,236,0.10)", color: "var(--platinum-200)", borderColor: "var(--hairline-on-dark)" }
      : { background: "var(--sand-100)", color: "var(--ink-600)", borderColor: "var(--hairline-on-light)" },
    emerald: { background: "var(--emerald-50)", color: "var(--emerald-600)", borderColor: "rgba(19,75,60,0.18)" },
    metal: { background: "transparent", color: surface === "dark" ? "var(--platinum-200)" : "var(--platinum-700)", borderColor: "var(--platinum-400)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: "11px",
        letterSpacing: ".1em",
        textTransform: "uppercase",
        padding: "5px 12px",
        borderRadius: "var(--r-pill)",
        border: "1px solid",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    />
  );
}
