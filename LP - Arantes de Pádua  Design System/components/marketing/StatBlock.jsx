import React from "react";

/**
 * StatBlock — a proof-point metric. Big serif numeral + tracked label.
 * `surface="dark"` for emerald sections (numeral goes platinum-bright).
 */
export function StatBlock({ value, label, surface = "light", align = "left", style, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "clamp(2.8rem, 4.5vw, 4rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: surface === "dark" ? "var(--platinum-100)" : "var(--emerald-700)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "var(--fs-xs)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: surface === "dark" ? "var(--text-on-dark-muted)" : "var(--text-muted)",
          marginTop: "12px",
        }}
      >
        {label}
      </div>
    </div>
  );
}
