import React from "react";

/**
 * PracticeCard — a practice-area card (área de atuação).
 * Icon + title + description, hairline border, subtle hover lift.
 */
export function PracticeCard({ icon, title, description, index, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface-paper)",
        border: "1px solid",
        borderColor: hover ? "var(--hairline-on-light-strong)" : "var(--hairline-on-light)",
        borderRadius: "var(--r-md)",
        padding: "32px 30px 30px",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        ...style,
      }}
      {...rest}
    >
      {index != null && (
        <span style={{ position: "absolute", top: "24px", right: "26px", fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--platinum-400)" }}>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <div style={{ color: "var(--emerald-600)", marginBottom: "20px", display: "flex" }}>{icon}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h4)", color: "var(--text-strong)", margin: "0 0 10px", lineHeight: 1.15 }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>
        {description}
      </p>
    </article>
  );
}
