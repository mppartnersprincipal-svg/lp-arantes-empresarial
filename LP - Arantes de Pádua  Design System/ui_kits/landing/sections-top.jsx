// Arantes de Pádua — landing page sections
const { useState: useS, useEffect: useE } = React;

const ASSETS = "../../assets";

/* ---------------- NAV ---------------- */
function Nav({ onNavClick }) {
  const [scrolled, setScrolled] = useS(false);
  const [open, setOpen] = useS(false);
  useE(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { id: "atuacao", label: "Atuação" },
    { id: "escritorio", label: "O Escritório" },
    { id: "socios", label: "Sócios" },
    { id: "contato", label: "Contato" },
  ];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "78px",
      display: "flex", alignItems: "center",
      background: scrolled ? "rgba(7,33,27,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--hairline-on-dark)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-out)",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <a href="#top" onClick={(e) => onNavClick(e, "top")} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src={`${ASSETS}/logo-ap-mark.webp`} alt="" style={{ width: "38px", height: "38px", borderRadius: "4px" }} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "15px", letterSpacing: ".26em", color: "var(--platinum-100)", textTransform: "uppercase" }}>Arantes de Pádua</span>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "9.5px", letterSpacing: ".42em", color: "var(--metal)", textTransform: "uppercase", marginTop: "3px" }}>Advogados</span>
          </span>
        </a>
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "38px" }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => onNavClick(e, l.id)}
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "14.5px", letterSpacing: ".03em", color: "var(--platinum-200)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--platinum-100)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--platinum-200)")}>{l.label}</a>
          ))}
          <Btn variant="metal" size="sm" as="a" href="#contato" onClick={(e) => onNavClick(e, "contato")}>Falar com a equipe</Btn>
        </nav>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ display: "none", background: "none", border: "none", color: "var(--platinum-100)", cursor: "pointer" }}>
          <Ico key={open ? "x" : "menu"} name={open ? "x" : "menu"} size={26} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu" style={{ position: "absolute", top: "78px", left: 0, right: 0, background: "rgba(7,33,27,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--hairline-on-dark)", padding: "20px 0 28px" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { onNavClick(e, l.id); setOpen(false); }}
                style={{ fontFamily: "var(--font-sans)", fontSize: "16px", letterSpacing: ".04em", color: "var(--platinum-100)", padding: "12px 0", borderBottom: "1px solid var(--hairline-on-dark)" }}>{l.label}</a>
            ))}
            <div style={{ marginTop: "16px" }}><Btn variant="metal" size="md" as="a" href="#contato" onClick={(e) => { onNavClick(e, "contato"); setOpen(false); }}>Falar com a equipe</Btn></div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ onNavClick }) {
  return (
    <div id="top" className="on-dark" style={{ position: "relative", background: "var(--surface-brand)", overflow: "hidden", paddingTop: "140px", paddingBottom: "90px" }}>
      {/* faint radial glow behind headline */}
      <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(149,198,182,.10), transparent 65%)", pointerEvents: "none" }} />
      <div className="container hero-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "64px", alignItems: "center" }}>
        <div>
          <Eyebrow surface="dark">Advocacia Empresarial</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-display)", lineHeight: "var(--lh-display)", letterSpacing: "var(--tr-display)", color: "var(--text-on-dark-strong)", margin: "26px 0 0" }}>
            Decisões que não admitem <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--metal-bright)" }}>improviso</span>.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.5, color: "var(--text-on-dark-muted)", margin: "28px 0 0", maxWidth: "30em" }}>
            Assessoria jurídica empresarial construída sobre a realidade do seu negócio. Prevenimos riscos, conduzimos litígios e damos segurança às suas decisões.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
            <Btn variant="metal" size="lg" as="a" href="#contato" onClick={(e) => onNavClick(e, "contato")}>Agendar diagnóstico</Btn>
            <Btn variant="outline" size="lg" surface="dark" as="a" href="#atuacao" onClick={(e) => onNavClick(e, "atuacao")}>Áreas de atuação</Btn>
          </div>
        </div>
        <div className="hero-photo" style={{ position: "relative" }}>
          <div style={{ position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: "var(--shadow-deep)", aspectRatio: "4 / 3.4" }}>
            <img src={`${ASSETS}/partners-duo.jpg`} alt="Sócios do escritório Arantes de Pádua" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(5,23,18,.55) 100%)" }} />
          </div>
          <div style={{ position: "absolute", bottom: "-26px", left: "-26px", background: "var(--surface-deep)", border: "1px solid var(--hairline-on-dark)", borderRadius: "var(--r-md)", padding: "20px 26px", boxShadow: "var(--shadow-deep)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", lineHeight: 1, color: "var(--platinum-100)" }}>+15</div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "10.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--emerald-200)", marginTop: "8px" }}>Anos de atuação</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TRUST / STATS ---------------- */
function StatsBar() {
  const stats = [
    { v: "+15", l: "Anos de experiência" },
    { v: "+300", l: "Empresas atendidas" },
    { v: "R$ 80M", l: "Em causas conduzidas" },
    { v: "98%", l: "Clientes recorrentes" },
  ];
  return (
    <div style={{ background: "var(--surface-deep)", borderTop: "1px solid var(--hairline-on-dark)" }}>
      <div className="container stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px", paddingTop: "52px", paddingBottom: "52px" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: i === 0 ? "none" : "1px solid var(--hairline-on-dark)", paddingLeft: i === 0 ? 0 : "32px" }}>
            <Stat value={s.v} label={s.l} surface="dark" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PRACTICE AREAS ---------------- */
function Practices() {
  const items = [
    { icon: "building-2", title: "Societário & M&A", desc: "Constituição, reorganizações, aquisições e acordos de sócios com visão de longo prazo." },
    { icon: "file-signature", title: "Contratos Empresariais", desc: "Estruturação, revisão e negociação de contratos que protegem a operação." },
    { icon: "scale", title: "Contencioso Estratégico", desc: "Defesa em litígios complexos, com leitura de risco e foco em resultado." },
    { icon: "landmark", title: "Tributário", desc: "Planejamento, recuperação de créditos e defesa em autuações fiscais." },
    { icon: "users", title: "Trabalhista Empresarial", desc: "Prevenção de passivos e gestão de relações de trabalho com segurança." },
    { icon: "life-buoy", title: "Recuperação & Reestruturação", desc: "Soluções para empresas em crise e renegociação de dívidas." },
  ];
  return (
    <Section id="atuacao" surface="light">
      <div style={{ maxWidth: "var(--container-narrow)" }}>
        <Eyebrow>Áreas de atuação</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h2)", color: "var(--text-strong)", margin: "22px 0 0", letterSpacing: "-.01em" }}>
          Atuação completa para a empresa que precisa decidir com <span className="serif-accent">confiança</span>.
        </h2>
      </div>
      <div className="practice-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "56px" }}>
        {items.map((it, i) => <Practice key={i} {...it} index={i + 1} />)}
      </div>
    </Section>
  );
}

function Practice({ icon, title, desc, index }) {
  const [h, setH] = useS(false);
  return (
    <article onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative", background: "var(--surface-paper)", border: "1px solid",
        borderColor: h ? "var(--hairline-on-light-strong)" : "var(--hairline-on-light)",
        borderRadius: "var(--r-md)", padding: "34px 30px 30px",
        transition: "all var(--dur-base) var(--ease-out)",
        transform: h ? "translateY(-3px)" : "none",
        boxShadow: h ? "var(--shadow-md)" : "var(--shadow-xs)",
      }}>
      <span style={{ position: "absolute", top: "26px", right: "28px", fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--platinum-400)" }}>{String(index).padStart(2, "0")}</span>
      <div style={{ color: "var(--emerald-600)", marginBottom: "20px", display: "flex" }}><Ico name={icon} size={30} /></div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h4)", color: "var(--text-strong)", margin: "0 0 10px", lineHeight: 1.15 }}>{title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>{desc}</p>
    </article>
  );
}

Object.assign(window, { Nav, Hero, StatsBar, Practices });
