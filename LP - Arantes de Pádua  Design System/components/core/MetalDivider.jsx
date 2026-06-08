import React from "react";

/**
 * MetalDivider — the metallic hairline from the logo lockup.
 * Use as a section divider or to flank a centered label.
 */
export function MetalDivider({ label, style, ...rest }) {
  const rule = { height: "1px", background: "var(--metal-grad-soft)", flex: 1 };
  if (!label) {
    return <hr style={{ border: 0, ...rule, height: "1px", ...style }} {...rest} />;
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", ...style }} {...rest}>
      <span style={rule} />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "13px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span style={rule} />
    </div>
  );
}
