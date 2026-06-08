import React from "react";

/**
 * Field — labelled text input / textarea with the brand's editorial styling.
 * Underline-forward, ivory fill, emerald focus. Works on light surfaces.
 */
export function Field({
  label,
  type = "text",
  textarea = false,
  rows = 4,
  hint,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldStyle = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: "var(--fs-body)",
    color: "var(--ink-900)",
    background: "var(--surface-paper)",
    border: "1px solid",
    borderColor: focus ? "var(--emerald-600)" : "var(--hairline-on-light-strong)",
    borderRadius: "var(--r-sm)",
    padding: "14px 16px",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px rgba(26,100,80,0.12)" : "none",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    resize: textarea ? "vertical" : undefined,
    fontFamily: "var(--font-body)",
  };

  return (
    <label style={{ display: "block", ...style }}>
      {label && (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--ink-600)",
            marginBottom: "8px",
          }}
        >
          {label}
          {required && <span style={{ color: "var(--emerald-500)" }}> *</span>}
        </span>
      )}
      {textarea ? (
        <textarea rows={rows} style={fieldStyle} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      ) : (
        <input type={type} style={fieldStyle} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest} />
      )}
      {hint && (
        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: "var(--text-faint)", marginTop: "6px" }}>
          {hint}
        </span>
      )}
    </label>
  );
}
