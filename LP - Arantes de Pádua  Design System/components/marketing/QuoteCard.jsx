import React from "react";

/**
 * QuoteCard — a client testimonial / pull quote.
 * Large serif quote with a metallic opening mark.
 */
export function QuoteCard({ quote, author, role, surface = "light", style, ...rest }) {
  const dark = surface === "dark";
  return (
    <blockquote
      style={{
        margin: 0,
        background: dark ? "var(--surface-raised)" : "var(--surface-paper)",
        border: "1px solid",
        borderColor: dark ? "var(--hairline-on-dark)" : "var(--hairline-on-light)",
        borderRadius: "var(--r-md)",
        padding: "40px 36px 32px",
        position: "relative",
        boxShadow: dark ? "var(--shadow-card-dark)" : "var(--shadow-xs)",
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: 0.6, color: dark ? "var(--platinum-600)" : "var(--platinum-400)", display: "block", height: "34px" }}>
        &ldquo;
      </span>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "1.5rem", lineHeight: 1.4, color: dark ? "var(--text-on-dark-strong)" : "var(--text-strong)", margin: "0 0 26px" }}>
        {quote}
      </p>
      <footer style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "var(--fs-sm)", letterSpacing: "0.04em", color: dark ? "var(--text-on-dark)" : "var(--text-strong)" }}>
          {author}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: dark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>
          {role}
        </span>
      </footer>
    </blockquote>
  );
}
