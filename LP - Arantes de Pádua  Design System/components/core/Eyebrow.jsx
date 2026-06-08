import React from "react";

/**
 * Eyebrow — small tracked Jost label that sits above headings.
 * Echoes the "ADVOGADOS" wordmark. Optional metallic tick.
 */
export function Eyebrow({ tick = true, surface = "light", children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "var(--tr-eyebrow)",
        textTransform: "uppercase",
        color: surface === "dark" ? "var(--metal)" : "var(--emerald-600)",
        ...style,
      }}
      {...rest}
    >
      {tick && (
        <span
          style={{
            width: "30px",
            height: "1px",
            background: "var(--metal-grad-soft)",
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
