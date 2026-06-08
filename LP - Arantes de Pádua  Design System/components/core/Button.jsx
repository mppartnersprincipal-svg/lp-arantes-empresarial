import React from "react";

/**
 * Button — Arantes de Pádua primary action.
 * Editorial, near-square (4px radius), Jost label, tracked uppercase.
 * Variants tuned for both light (ivory) and dark (emerald) surfaces.
 */
export function Button({
  variant = "primary",
  size = "md",
  surface = "light",
  fullWidth = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: "10px 18px", fontSize: "12px", letterSpacing: ".1em" },
    md: { padding: "15px 28px", fontSize: "13px", letterSpacing: ".09em" },
    lg: { padding: "19px 38px", fontSize: "14px", letterSpacing: ".09em" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "var(--r-sm)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    transform: active ? "translateY(0) scale(0.985)" : hover ? "translateY(-1px)" : "none",
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: hover ? "var(--emerald-600)" : "var(--emerald-700)",
      color: "var(--ivory)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
    },
    metal: {
      background: "var(--metal-grad)",
      color: "var(--ink-900)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      filter: hover ? "brightness(1.04)" : "none",
    },
    outline: {
      background: hover ? (surface === "dark" ? "rgba(240,241,236,0.06)" : "rgba(14,51,42,0.04)") : "transparent",
      color: surface === "dark" ? "var(--platinum-100)" : "var(--emerald-700)",
      borderColor: surface === "dark"
        ? (hover ? "var(--platinum-300)" : "var(--hairline-on-dark-strong)")
        : (hover ? "var(--emerald-700)" : "var(--hairline-on-light-strong)"),
    },
    ghost: {
      background: hover ? (surface === "dark" ? "rgba(240,241,236,0.06)" : "rgba(14,51,42,0.04)") : "transparent",
      color: surface === "dark" ? "var(--platinum-100)" : "var(--emerald-700)",
    },
  };

  const Comp = as;
  return (
    <Comp
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
