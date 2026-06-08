# CLAUDE.md — Arantes de Pádua · Design System & Landing Page

> Contexto para edição via Claude Code. Leia este arquivo antes de alterar qualquer coisa.

## O que é este projeto
Design system e landing page do escritório **Arantes de Pádua · Advogados** — direito empresarial, clientes corporativos, em **português (PT-BR)**. A identidade nasce da logomarca: monograma **AP** em platina sobre **verde-esmeralda**.

A landing page de produção fica em **`ui_kits/landing/`** (React via Babel in-browser). É o artefato principal a editar.

## Como rodar / visualizar
São arquivos HTML estáticos — não há build. Abra `ui_kits/landing/index.html` num servidor estático local (ex.: `npx serve` na raiz, ou a extensão Live Server do VSCode) e acesse o arquivo. Os `<script type="text/babel">` compilam no navegador.

## Arquitetura
```
styles.css              → entry point de CSS; importa todos os tokens de tokens/
components.css          → classes reutilizáveis (.btn, .card, .area-card, .input, .badge…)
tokens/
  colors.css            → escalas (emerald, platinum, sand/ivory, ink) + ALIASES semânticos
  typography.css        → famílias, pesos, escala fluida, tracking
  spacing.css           → grade 4px, raios, sombras, motion
  base.css              → resets + utilitários (.eyebrow, .lead, .metal-rule, .serif-accent)
components/             → versões React dos componentes (.jsx + .d.ts + .prompt.md)
  core/                 → Button, Badge, Eyebrow, MetalDivider
  forms/                → Field
  marketing/            → PracticeCard, PartnerCard, QuoteCard, StatBlock
guidelines/             → specimen cards do design system (referência visual)
ui_kits/landing/        → ★ LANDING PAGE DE PRODUÇÃO
  index.html            → shell: carrega React, Babel, lucide e os 3 .jsx abaixo
  ui.jsx                → componentes base (Nav, Footer, Button, primitivos)
  sections-top.jsx      → Hero, StatsBar, Practices, About
  sections-bottom.jsx   → Partners, Process, Testimonials, Contact
assets/                 → logo-ap-full.webp, logo-ap-mark.webp, partner-1/2.jpg, partners-duo.jpg
```

## Regras de edição (NÃO QUEBRAR)
1. **Cores só por token semântico** de `tokens/colors.css` — `--surface-brand`, `--text-body`, `--accent`, `--metal`, etc. Nunca hardcode hex; nunca invente cor fora das escalas.
2. **Duas superfícies:** seção clara (marfim/sand) ou escura (esmeralda). Em seção escura, envolva num wrapper com a classe `.on-dark` — os componentes se invertem sozinhos.
3. **Tipografia tripla:** Cormorant Garamond (títulos), Jost (eyebrows/UI/botões, UPPERCASE com tracking), Mulish (texto). Palavra de ênfase em título usa `.serif-accent` (itálico esmeralda).
4. **Platina é acento, nunca fundo.** Filetes (`.metal-rule` / `--metal-grad`), números de índice italic, no máx. 1 botão "metal" por tela.
5. **Raios contidos** (`--r-sm/md/lg`); cards nunca em formato pílula. Sombra suave no claro, `--shadow-card-dark` no esmeralda.
6. **Tom corporativo PT-BR**, verbos diretos, sem emoji, sem gradientes decorativos, sem "data slop" (ícones/números sem função).
7. Ícones: **Lucide** (já carregado via CDN no index.html). Stroke, nunca filled.

## Conteúdo placeholder a substituir por dados reais
- OAB dos sócios (`OAB/SP 000.000`), nomes/cargos completos
- Estatísticas (anos, casos, % de retenção)
- Textos das áreas de atuação e depoimentos
- Retratos individuais (hoje recortados da foto em dupla `assets/partners-duo.jpg`)

## Referências
- `readme.md` — visão geral do design system
- `SKILL.md` — guia rápido de uso e padrões de composição
- `guidelines/*.html` — cards de especificação (cores, tipografia, espaçamento, componentes)
