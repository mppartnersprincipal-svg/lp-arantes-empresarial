import React from "react";

/**
 * PartnerCard — a partner / advogado portrait card.
 * Portrait with an emerald gradient foot, name, role, OAB.
 */
export function PartnerCard({ photo, name, role, oab, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: 0,
        position: "relative",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        aspectRatio: "3 / 4",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <img
        src={photo}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-out)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 42%, rgba(5,23,18,0.90) 100%)" }} />
      <figcaption style={{ position: "absolute", left: "24px", right: "24px", bottom: "22px" }}>
        {oab && (
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--metal)" }}>
            {oab}
          </span>
        )}
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", color: "var(--text-on-dark-strong)", lineHeight: 1.1, marginTop: "6px" }}>
          {name}
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--platinum-200)", marginTop: "2px" }}>
          {role}
        </div>
      </figcaption>
    </figure>
  );
}
