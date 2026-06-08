// Arantes de Pádua — landing page sections (bottom half)
const { useState: useSb, useEffect: useEb } = React;
const ASSETS_B = "../../assets";

/* ---------------- ABOUT / O ESCRITÓRIO ---------------- */
function About() {
  return (
    <Section id="escritorio" surface="sand">
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "72px", alignItems: "center" }}>
        <div className="about-photo" style={{ position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: "4 / 4.6" }}>
          <img src={`${ASSETS_B}/partner-2.jpg`} alt="Sócio do escritório" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <Eyebrow>O Escritório</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h2)", color: "var(--text-strong)", margin: "22px 0 0", letterSpacing: "-.01em" }}>
            Técnica jurídica a serviço de decisões <span className="serif-accent">empresariais</span>.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.55, color: "var(--text-muted)", margin: "26px 0 0" }}>
            O Arantes de Pádua nasceu para ser o departamento jurídico estratégico de empresas que buscam crescer com segurança.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", lineHeight: 1.7, color: "var(--text-body)", margin: "20px 0 0" }}>
            Combinamos rigor técnico e leitura de negócio. Cada parecer parte da realidade do cliente — não de modelos genéricos — para que a decisão jurídica seja, antes de tudo, uma boa decisão empresarial.
          </p>
          <hr className="metal-rule" style={{ margin: "38px 0" }} />
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px" }}>
            {[
              { icon: "shield-check", t: "Visão preventiva", d: "Antecipamos riscos antes que se tornem litígios." },
              { icon: "handshake", t: "Relação próxima", d: "Atendimento direto com os sócios, sem intermediários." },
              { icon: "target", t: "Foco em resultado", d: "Estratégia orientada ao objetivo do seu negócio." },
              { icon: "lock", t: "Sigilo absoluto", d: "Confidencialidade em cada etapa do trabalho." },
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ color: "var(--emerald-600)", flex: "none", marginTop: "2px" }}><Ico name={v.icon} size={22} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "14px", letterSpacing: ".02em", color: "var(--text-strong)" }}>{v.t}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", lineHeight: 1.55, color: "var(--text-muted)", marginTop: "4px" }}>{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PARTNERS / SÓCIOS ---------------- */
function Partners() {
  const partners = [
    { photo: `${ASSETS_B}/partner-1.jpg`, name: "Arantes", role: "Sócio · Contencioso e Tributário", oab: "OAB/SP 000.000" },
    { photo: `${ASSETS_B}/partner-2.jpg`, name: "de Pádua", role: "Sócio · Societário e Contratos", oab: "OAB/SP 000.000" },
  ];
  return (
    <Section id="socios" surface="light">
      <div className="partners-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px 40px", maxWidth: "var(--container-max)" }}>
        <div style={{ maxWidth: "32em" }}>
          <Eyebrow>Sócios</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h2)", color: "var(--text-strong)", margin: "22px 0 0", letterSpacing: "-.01em", lineHeight: 1.12 }}>
            Quem conduz <span className="serif-accent">pessoalmente</span> o seu caso.
          </h2>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", lineHeight: 1.65, color: "var(--text-muted)", maxWidth: "26em", marginBottom: "6px" }}>
          No Arantes de Pádua, o cliente fala diretamente com os sócios. Experiência sênior em cada etapa do trabalho.
        </p>
      </div>
      <div className="partners-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px", marginTop: "52px", maxWidth: "840px" }}>
        {partners.map((p, i) => <PartnerCardL key={i} {...p} />)}
      </div>
    </Section>
  );
}

function PartnerCardL({ photo, name, role, oab }) {
  const [h, setH] = useSb(false);
  return (
    <figure onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ margin: 0, position: "relative", borderRadius: "var(--r-md)", overflow: "hidden", aspectRatio: "3 / 3.5", boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)", transition: "box-shadow var(--dur-base) var(--ease-out)" }}>
      <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", transform: h ? "scale(1.04)" : "scale(1)", transition: "transform var(--dur-slow) var(--ease-out)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(5,23,18,.92) 100%)" }} />
      <figcaption style={{ position: "absolute", left: "28px", right: "28px", bottom: "26px" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--metal)" }}>{oab}</span>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.7rem", color: "var(--text-on-dark-strong)", lineHeight: 1.1, marginTop: "6px" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--platinum-200)", marginTop: "3px" }}>{role}</div>
      </figcaption>
    </figure>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Diagnóstico", d: "Entendemos o seu negócio e mapeamos riscos e oportunidades jurídicas." },
    { n: "02", t: "Estratégia", d: "Desenhamos o caminho — preventivo ou contencioso — com objetivos claros." },
    { n: "03", t: "Execução", d: "Conduzimos cada etapa com acompanhamento próximo e comunicação direta." },
    { n: "04", t: "Resultado", d: "Reportamos avanços de forma transparente até a solução final." },
  ];
  return (
    <Section surface="brand">
      <div style={{ maxWidth: "var(--container-narrow)" }}>
        <Eyebrow surface="dark">Como trabalhamos</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h2)", color: "var(--text-on-dark-strong)", margin: "22px 0 0", letterSpacing: "-.01em" }}>
          Um método claro, do primeiro contato ao <span style={{ fontStyle: "italic", color: "var(--metal-bright)" }}>resultado</span>.
        </h2>
      </div>
      <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "28px", marginTop: "56px" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--hairline-on-dark-strong)", paddingTop: "24px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", color: "var(--metal)", lineHeight: 1 }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "var(--text-on-dark-strong)", margin: "16px 0 8px" }}>{s.t}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", lineHeight: 1.6, color: "var(--text-on-dark-muted)", margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    { q: "Conduziram nossa reestruturação societária com rigor técnico e tranquilidade. Resultado acima do esperado.", a: "Diretor Jurídico", r: "Indústria de bens de consumo" },
    { q: "Passamos a tratar o jurídico como parte da estratégia. Hoje decidimos com muito mais segurança.", a: "CEO", r: "Empresa de tecnologia" },
  ];
  return (
    <Section surface="light">
      <Eyebrow>Confiança de quem decide</Eyebrow>
      <div className="quotes-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px", marginTop: "40px" }}>
        {quotes.map((qt, i) => (
          <blockquote key={i} style={{ margin: 0, background: "var(--surface-paper)", border: "1px solid var(--hairline-on-light)", borderRadius: "var(--r-md)", padding: "42px 38px 34px", boxShadow: "var(--shadow-xs)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: 0.6, color: "var(--platinum-400)", display: "block", height: "34px" }}>&ldquo;</span>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, fontSize: "1.55rem", lineHeight: 1.4, color: "var(--text-strong)", margin: "0 0 26px" }}>{qt.q}</p>
            <footer>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "var(--fs-sm)", letterSpacing: ".03em", color: "var(--text-strong)" }}>{qt.a}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: "var(--text-muted)", marginTop: "2px" }}>{qt.r}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT CTA ---------------- */
function Contact() {
  const [form, setForm] = useSb({ nome: "", email: "", empresa: "", msg: "" });
  const [sent, setSent] = useSb(false);
  const [errors, setErrors] = useSb({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.nome.trim()) er.nome = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = true;
    if (!form.msg.trim()) er.msg = true;
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  return (
    <Section id="contato" surface="deep">
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>
        <div>
          <Eyebrow surface="dark">Agende um diagnóstico</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h2)", color: "var(--text-on-dark-strong)", margin: "22px 0 0", letterSpacing: "-.01em" }}>
            Vamos conversar sobre o seu <span style={{ fontStyle: "italic", color: "var(--metal-bright)" }}>negócio</span>.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-lead)", lineHeight: 1.55, color: "var(--text-on-dark-muted)", margin: "24px 0 0", maxWidth: "26em" }}>
            A primeira conversa é uma leitura estratégica da sua demanda — sem compromisso e com total sigilo.
          </p>
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              { icon: "mail", t: "contato@arantesdepadua.com.br" },
              { icon: "phone", t: "+55 (00) 0000-0000" },
              { icon: "map-pin", t: "Av. Exemplo, 0000 · Conj. 000 · São Paulo/SP" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--platinum-200)" }}>
                <span style={{ color: "var(--metal)", display: "flex" }}><Ico name={c.icon} size={18} /></span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)" }}>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--surface-raised)", border: "1px solid var(--hairline-on-dark)", borderRadius: "var(--r-lg)", padding: "38px 36px", boxShadow: "var(--shadow-deep)" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 10px" }}>
              <span style={{ color: "var(--metal-bright)", display: "inline-flex" }}><Ico name="check-circle" size={48} /></span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.7rem", color: "var(--text-on-dark-strong)", margin: "20px 0 8px" }}>Mensagem recebida.</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--text-on-dark-muted)", margin: 0 }}>Retornaremos em até um dia útil. Obrigado pelo contato.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <FieldL label="Nome" value={form.nome} onChange={set("nome")} error={errors.nome} placeholder="Seu nome completo" />
              <FieldL label="E-mail" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="voce@empresa.com.br" />
              <FieldL label="Empresa" value={form.empresa} onChange={set("empresa")} placeholder="Nome da empresa (opcional)" />
              <FieldL label="Como podemos ajudar" textarea value={form.msg} onChange={set("msg")} error={errors.msg} placeholder="Descreva brevemente sua demanda." />
              <div style={{ marginTop: "8px" }}>
                <Btn variant="metal" size="lg" type="submit" style={{ width: "100%" }}>Enviar mensagem</Btn>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: "var(--text-on-dark-faint)", textAlign: "center", margin: "16px 0 0" }}>Sigilo garantido · resposta em até 1 dia útil</p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function FieldL({ label, type = "text", textarea, value, onChange, error, placeholder }) {
  const [focus, setFocus] = useSb(false);
  const style = {
    width: "100%", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", color: "var(--platinum-100)",
    background: "rgba(7,33,27,0.5)", border: "1px solid",
    borderColor: error ? "var(--danger)" : focus ? "var(--platinum-400)" : "var(--hairline-on-dark-strong)",
    borderRadius: "var(--r-sm)", padding: "13px 15px", outline: "none", boxSizing: "border-box",
    transition: "border-color var(--dur-base) var(--ease-out)", resize: textarea ? "vertical" : undefined,
  };
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "11.5px", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--platinum-300)", marginBottom: "8px" }}>{label}</label>
      {textarea
        ? <textarea rows={4} value={value} onChange={onChange} placeholder={placeholder} style={style} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
        : <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={style} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />}
      {error && <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: "var(--danger)", marginTop: "6px", display: "block" }}>Campo obrigatório.</span>}
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ onNavClick }) {
  return (
    <footer style={{ background: "#040f0c", borderTop: "1px solid var(--hairline-on-dark)", paddingTop: "64px", paddingBottom: "40px" }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "48px", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img src={`${ASSETS_B}/logo-ap-mark.webp`} alt="" style={{ width: "44px", height: "44px", borderRadius: "4px" }} />
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "15px", letterSpacing: ".26em", color: "var(--platinum-100)", textTransform: "uppercase" }}>Arantes de Pádua</span>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "9.5px", letterSpacing: ".42em", color: "var(--metal)", textTransform: "uppercase", marginTop: "3px" }}>Advogados</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", lineHeight: 1.65, color: "var(--text-on-dark-faint)", margin: "22px 0 0", maxWidth: "30em" }}>
              Assessoria jurídica empresarial para empresas que querem crescer com segurança e previsibilidade.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--metal)", marginBottom: "18px" }}>Navegação</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["atuacao", "Atuação"], ["escritorio", "O Escritório"], ["socios", "Sócios"], ["contato", "Contato"]].map(([id, l]) => (
                <a key={id} href={`#${id}`} onClick={(e) => onNavClick(e, id)} style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--platinum-300)" }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--metal)", marginBottom: "18px" }}>Contato</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--platinum-300)" }}>
              <span>contato@arantesdepadua.com.br</span>
              <span>+55 (00) 0000-0000</span>
              <span>São Paulo · SP</span>
            </div>
          </div>
        </div>
        <hr className="metal-rule" style={{ margin: "48px 0 24px", opacity: 0.5 }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", color: "var(--text-on-dark-faint)" }}>
          <span>© 2026 Arantes de Pádua Advogados. Todos os direitos reservados.</span>
          <span>OAB/SP · Este site tem caráter meramente informativo.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { About, Partners, Process, Testimonials, Contact, Footer });
