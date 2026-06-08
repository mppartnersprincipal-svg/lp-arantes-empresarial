// Arantes de Pádua — landing UI primitives (mirror the DS components)
const { useState } = React;

function Eyebrow({ children, surface = "light", tick = true, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "14px",
      fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase",
      color: surface === "dark" ? "var(--metal)" : "var(--emerald-600)", ...style,
    }}>
      {tick && <span style={{ width: "32px", height: "1px", background: "var(--metal-grad-soft)", flex: "none" }} />}
      {children}
    </span>
  );
}

function Btn({ variant = "primary", size = "md", surface = "light", as = "button", children, style, ...rest }) {
  const [h, setH] = useState(false), [a, setA] = useState(false);
  const sizes = {
    sm: { padding: "11px 20px", fontSize: "12px" },
    md: { padding: "15px 28px", fontSize: "13px" },
    lg: { padding: "18px 36px", fontSize: "13.5px" },
  };
  const variants = {
    primary: { background: h ? "var(--emerald-600)" : "var(--emerald-700)", color: "var(--ivory)", boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)" },
    metal: { background: "var(--metal-grad)", color: "var(--ink-900)", filter: h ? "brightness(1.05)" : "none", boxShadow: h ? "var(--shadow-md)" : "var(--shadow-xs)" },
    outline: {
      background: h ? (surface === "dark" ? "rgba(240,241,236,.06)" : "rgba(14,51,42,.04)") : "transparent",
      color: surface === "dark" ? "var(--platinum-100)" : "var(--emerald-700)",
      borderColor: surface === "dark" ? (h ? "var(--platinum-300)" : "var(--hairline-on-dark-strong)") : (h ? "var(--emerald-700)" : "var(--hairline-on-light-strong)"),
    },
  };
  const Comp = as;
  return (
    <Comp
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setA(false); }}
      onMouseDown={() => setA(true)} onMouseUp={() => setA(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
        fontFamily: "var(--font-sans)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".09em",
        border: "1px solid transparent", borderRadius: "var(--r-sm)", cursor: "pointer", textDecoration: "none",
        transition: "all var(--dur-base) var(--ease-out)",
        transform: a ? "scale(0.985)" : h ? "translateY(-1px)" : "none",
        ...sizes[size], ...variants[variant], ...style,
      }}
      {...rest}
    >{children}</Comp>
  );
}

function Stat({ value, label, surface = "light", align = "left" }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.6rem,4vw,3.6rem)", lineHeight: 1, letterSpacing: "-.02em", color: surface === "dark" ? "var(--platinum-100)" : "var(--emerald-700)" }}>{value}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--fs-xs)", letterSpacing: ".16em", textTransform: "uppercase", color: surface === "dark" ? "var(--emerald-200)" : "var(--text-muted)", marginTop: "12px" }}>{label}</div>
    </div>
  );
}

function Section({ id, surface = "light", children, style }) {
  const bg = { light: "var(--surface-light)", sand: "var(--surface-sand)", brand: "var(--surface-brand)", deep: "var(--surface-deep)", paper: "var(--surface-paper)" }[surface];
  return (
    <section id={id} className={surface === "brand" || surface === "deep" ? "on-dark" : ""} style={{ background: bg, paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)", ...style }}>
      <div className="container">{children}</div>
    </section>
  );
}

// Memoized so hover-driven parent re-renders don't disturb lucide's
// <i> → <svg> replacement (which would otherwise crash React's diff).
const Ico = React.memo(function Ico({ name, size = 30 }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return <i data-lucide={name} style={{ width: size, height: size, display: "inline-flex" }} />;
});

Object.assign(window, { Eyebrow, Btn, Stat, Section, Ico });
