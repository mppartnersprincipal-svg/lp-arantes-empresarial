# Arantes de Pádua — Design System

Identidade visual e biblioteca de componentes do escritório **Arantes de Pádua · Advogados**, especializado em **direito empresarial** para clientes corporativos.

O sistema nasce inteiramente da logomarca: o monograma **AP** em prata/platina sobre um campo **verde-esmeralda** profundo, com wordmark em sans-serif geométrica de tracking largo. Daí derivam as duas faces da marca — **autoridade** (esmeralda) e **clareza** (marfim) — e um acento metálico que aparece em filetes, índices e detalhes.

---

## 1. Princípios

1. **Sobriedade com sofisticação.** Nada de gradientes chamativos, emoji ou cantos muito arredondados. Espaço em branco generoso, tipografia editorial, hierarquia calma.
2. **Duas superfícies, um sistema.** Cada componente funciona em superfície clara (marfim) e escura (esmeralda). Use `.on-dark` para alternar o contexto.
3. **Prata é tempero, não base.** O metálico (`--metal-grad`, platina) marca momentos de marca — filetes, números de índice, um botão premium por tela. Nunca como fundo de blocos inteiros.
4. **Serifa fala, sans organiza.** Títulos em serifa editorial (Cormorant). Rótulos, navegação e UI na geométrica (Jost). Texto corrido na humanista (Mulish).
5. **Densidade corporativa.** Conteúdo objetivo, verbos diretos, sem "data slop". Cada elemento precisa justificar sua presença.

---

## 2. Fundamentos visuais

### Cores
Definidas em `tokens/colors.css`. Use sempre os **aliases semânticos** no código de produto (`--surface-brand`, `--text-body`, `--accent`, `--metal`), não os valores brutos.

| Papel | Token | Valor |
|---|---|---|
| Campo da marca (hero, rodapé) | `--emerald-700` | `#0E332A` |
| Esmeralda mais profundo | `--emerald-900` | `#07211B` |
| Metálico base (monograma) | `--platinum-500` | `#A5A8A0` |
| Página clara padrão | `--ivory` | `#FAF9F4` |
| Texto forte sobre claro | `--ink-900` | `#13201C` |

Escalas completas: **emerald** (50–950), **platinum** (100–800), **sand/ivory** (papel quente) e **ink** (cinzas esverdeados para texto).

### Tipografia
Definida em `tokens/typography.css`.

- **Display — Cormorant Garamond** (serif): títulos, com palavra de ênfase em *itálico esmeralda* (`.serif-accent`).
- **Sans — Jost** (geométrica): eyebrows, navegação, rótulos, botões. Ecoa o wordmark; usar UPPERCASE com tracking (`--tr-eyebrow` / `--tr-wide`).
- **Body — Mulish** (humanista): parágrafos e leitura longa.

Escala fluida via `clamp()`: `--fs-display` → `--fs-h4`, mais `--fs-lead/body/sm/xs`.

### Espaçamento, raios e elevação
Definidos em `tokens/spacing.css`. Grade base **4px**. Raios contidos (`2–18px`, nunca pill em cards). Sombras suaves no claro (`--shadow-sm/md/lg`) e profundas no esmeralda (`--shadow-card-dark`).

### Marca
- `assets/logo-ap-full.webp` — lockup primário (sobre esmeralda).
- `assets/logo-ap-mark.webp` — monograma isolado (avatar, favicon, social).
- Clear space mínimo ao redor do monograma = altura do "A".

---

## 3. Estrutura de arquivos

```
styles.css              → entry point (importa todos os tokens)
components.css          → biblioteca de classes (botões, cards, inputs, badges)
tokens/
  colors.css            → escalas + aliases semânticos
  typography.css        → famílias, pesos, escala, tracking
  spacing.css           → grade, raios, sombras, motion
  base.css              → resets + utilitários (.eyebrow, .lead, .metal-rule)
components/
  core/                 → Button, Badge, Eyebrow, MetalDivider (React + .d.ts + .prompt.md)
  forms/                → Field
  marketing/            → PartnerCard, PracticeCard, QuoteCard, StatBlock
guidelines/             → specimen cards (Type, Colors, Spacing, Brand, Components)
ui_kits/landing/        → landing page completa do escritório (React)
assets/                 → logo, monograma, retratos dos sócios
```

---

## 4. Como usar

**Em HTML/CSS puro** — linke os dois CSS e use as classes:

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="components.css">

<span class="eyebrow eyebrow--tick">Áreas de atuação</span>
<h2>Defesa <span class="serif-accent">precisa.</span></h2>
<a class="btn btn--primary">Falar com o escritório</a>
```

Em seção escura, embrulhe num container `.on-dark` para inverter cores automaticamente.

**Em React** — importe os componentes de `components/`. Cada um traz `.d.ts` (tipos) e `.prompt.md` (uso). Veja `ui_kits/landing/` como referência de composição completa.

---

## 5. Aplicação de referência

`ui_kits/landing/index.html` monta a landing page completa — nav, hero com os sócios, barra de estatísticas, áreas de atuação, sobre, sócios, processo, depoimentos, contato e rodapé. É a prova viva do sistema e o melhor ponto de partida para novas telas.
