/* ============================================================
   Arantes de Pádua — Landing Page · interações
   Nav, menu mobile, FAQ, formulário → WhatsApp e tracking.
   ============================================================ */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5562999113757";

  /* ---------------- Ano do rodapé ---------------- */
  var anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------------- Tracking helper ---------------- */
  // Centraliza o disparo de conversões para Google (GTM/GA4) e Meta Pixel.
  function track(eventName, params) {
    params = params || {};
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: eventName }, params));
    } catch (e) {}
    // Meta Pixel (se carregado)
    try {
      if (typeof window.fbq === "function") {
        var fbEvent = params.fb_event || (eventName === "generate_lead" ? "Lead" : "Contact");
        window.fbq("track", fbEvent);
      }
    } catch (e) {}
    // GA4 direto (se gtag estiver presente em vez de GTM)
    try {
      if (typeof window.gtag === "function") window.gtag("event", eventName, params);
    } catch (e) {}
  }

  /* ---------------- Cliques rastreados (data-track) ---------------- */
  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () {
      var id = el.getAttribute("data-track");
      var isWhats = id.indexOf("whatsapp") !== -1;
      track(isWhats ? "contact" : "cta_click", {
        cta_id: id,
        fb_event: isWhats ? "Contact" : "Lead"
      });
    });
  });

  /* ---------------- Nav: fundo ao rolar ---------------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Menu mobile ---------------- */
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    mobile.querySelectorAll("[data-nav-link]").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll("#faq-list .faq__item").forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    var panel = item.querySelector(".faq__a");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      // fecha os demais (comportamento de acordeão)
      document.querySelectorAll("#faq-list .faq__item.is-open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq__q").setAttribute("aria-expanded", "false");
          other.querySelector(".faq__a").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------------- Formulário → WhatsApp ---------------- */
  var form = document.getElementById("leadForm");
  if (!form) return;

  function setError(name, on) {
    var wrap = form.querySelector('[data-field="' + name + '"]');
    if (wrap) wrap.classList.toggle("has-error", !!on);
  }

  function validEmail(v) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nome = form.nome.value.trim();
    var empresa = form.empresa.value.trim();
    var email = form.email.value.trim();
    var telefone = form.telefone.value.trim();
    var mensagem = form.mensagem.value.trim();
    var consent = form.consent.checked;

    var checks = [
      ["nome", !nome],
      ["empresa", !empresa],
      ["email", !validEmail(email)],
      ["telefone", !telefone],
      ["consent", !consent]
    ];
    var errors = [];
    checks.forEach(function (c) {
      setError(c[0], c[1]);
      if (c[1]) errors.push(c[0]);
    });

    if (errors.length) {
      var first = form.querySelector('[data-field="' + errors[0] + '"] input, [data-field="' + errors[0] + '"] textarea');
      if (first) first.focus();
      return;
    }

    // Dispara conversão (seção 8): Google generate_lead / Meta Lead
    track("generate_lead", {
      method: "whatsapp_form",
      form_id: "leadForm",
      button_text: "Enviar pelo WhatsApp",
      fb_event: "Lead"
    });

    // Monta a mensagem pré-preenchida
    var texto =
      "Olá! Vim pela landing page e gostaria de agendar uma consultoria.\n" +
      "Nome: " + nome + "\n" +
      "Empresa: " + empresa + "\n" +
      "E-mail: " + email + "\n" +
      "Telefone: " + telefone + "\n" +
      "Caso: " + (mensagem || "(não informado)");

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank", "noopener");
  });

  // Limpa o estado de erro ao corrigir o campo
  form.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", function () {
      var wrap = input.closest("[data-field]");
      if (wrap) wrap.classList.remove("has-error");
    });
  });
})();

/* ============================================================
   Animações — máquina de escrever (hero) + reveal ao rolar
   Vanilla JS, sem dependências. Bloco isolado para não ser
   afetado por retornos antecipados do bloco acima.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Máquina de escrever ---------------- */
  // Mantém o texto no HTML (bom para SEO/sem-JS). Aqui apenas o
  // reescrevemos caractere a caractere, preservando o <em>.
  var title = document.getElementById("hero-title");
  if (title) {
    if (reduceMotion) {
      title.style.visibility = "visible";
    } else {
      try {
        typeTitle(title);
      } catch (e) {
        // Falha de segurança: garante que o título nunca fique oculto.
        title.classList.remove("tw");
        title.style.visibility = "visible";
      }
    }
  }

  function typeTitle(el) {
    // Coleta os segmentos a partir dos nós-filhos, preservando o <em>.
    var segments = [];
    Array.prototype.forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        segments.push({ text: node.textContent, em: false });
      } else if (node.nodeType === 1) {
        segments.push({ text: node.textContent, em: !!node.closest("em") });
      }
    });

    // Reserva a altura atual para não causar layout shift (CLS).
    el.style.minHeight = el.offsetHeight + "px";
    el.textContent = "";
    el.classList.add("tw"); // exibe o cursor enquanto digita
    el.style.visibility = "visible"; // inline: permanece visível mesmo após remover .tw

    var seg = 0;
    var pos = 0;
    var holder = null;

    function step() {
      if (seg >= segments.length) {
        // Concluído: aguarda um instante e remove o cursor.
        setTimeout(function () {
          el.classList.remove("tw");
        }, 1100);
        return;
      }
      var current = segments[seg];
      if (pos === 0) {
        holder = current.em ? document.createElement("em") : document.createTextNode("");
        el.appendChild(holder);
      }
      if (pos < current.text.length) {
        var ch = current.text.charAt(pos++);
        holder.textContent += ch;
        // Levemente mais rápido em espaços para um ritmo natural.
        setTimeout(step, ch === " " ? 22 : 36);
      } else {
        seg++;
        pos = 0;
        step();
      }
    }

    // Atraso curto: o título (elemento mais importante) aparece quase imediatamente.
    setTimeout(step, 140);
  }

  /* ---------------- Reveal ao rolar ---------------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var groups = [
      ".section-head",
      ".impact-card",
      ".area-card",
      ".process-step",
      ".lawyer-card",
      ".value",
      ".faq__item",
      ".problema__grid > div",
      ".contact__info",
      ".form-card",
      ".section-cta"
    ];
    var items = [].slice.call(document.querySelectorAll(groups.join(",")));

    items.forEach(function (el) {
      el.classList.add("reveal");
      // Stagger suave dentro de cada grupo de cartões/colunas.
      var siblings = el.parentNode ? el.parentNode.children : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      var delay = Math.min(index, 5) * 80;
      if (delay) el.style.transitionDelay = delay + "ms";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
