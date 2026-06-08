# SKILL: Arantes de Pádua — Design System

Use este design system ao criar qualquer peça para o escritório **Arantes de Pádua · Advogados** (direito empresarial, clientes corporativos). Ele é derivado da logomarca: monograma de platina sobre esmeralda.

## Antes de começar
1. Leia `readme.md` para o panorama, depois os arquivos de `tokens/` que forem relevantes.
2. Linke **sempre** `styles.css` (tokens) e, se usar componentes em CSS, `components.css`.
3. Para React, importe de `components/` — cada componente tem `.prompt.md` com exemplos.
4. Copie os assets que precisar de `assets/` para o seu diretório de saída; não referencie por caminho cruzado.

## Regras de ouro (não negociáveis)
- **Cores só por alias semântico** (`--surface-brand`, `--text-body`, `--accent`, `--metal`). Nunca invente cores fora das escalas de `colors.css`.
- **Duas superfícies.** Toda seção é clara (marfim/sand) ou escura (esmeralda). Em seção escura, use o wrapper `.on-dark` — os componentes se invertem sozinhos.
- **Tipografia tripla:** serifa (Cormorant) para títulos, Jost para eyebrows/UI/botões em UPPERCASE tracked, Mulish para texto. Use `.serif-accent` para a palavra em itálico esmeralda dentro de um título.
- **Platina é acento, nunca fundo.** Filetes (`.metal-rule`, `--metal-grad`), números de índice italic, no máximo um botão `metal` por tela.
- **Raios contidos** (`--r-sm`/`--r-md`/`--r-lg`); cards nunca em pill. Sombras suaves no claro, profundas (`--shadow-card-dark`) no esmeralda.
- **Sem slop.** Nada de emoji, gradientes decorativos, ícones/estatísticas sem função. Tom corporativo, verbos diretos, em português.

## Componentes disponíveis
- **core:** `Button` (primary / metal / outline / ghost), `Badge`, `Eyebrow`, `MetalDivider`
- **forms:** `Field` (label + input/textarea)
- **marketing:** `PracticeCard` (área de atuação, com índice italic), `PartnerCard` (sócio + foto), `QuoteCard` (depoimento), `StatBlock`

## Padrões de composição
- **Eyebrow + título + lead** abre quase toda seção: `<span class="eyebrow eyebrow--tick">` → `<h2>` com `.serif-accent` → `<p class="lead">`.
- **Hero** sobre esmeralda, com retrato dos sócios e CTA primário + link-arrow.
- **Áreas de atuação** em grid de `PracticeCard` com numeração italic em platina.
- **Contato** em superfície esmeralda com `Field` invertidos (`.on-dark`).

## Saída
A landing page de referência (`ui_kits/landing/`) é o exemplo canônico — espelhe sua estrutura, ritmo e densidade ao criar novas telas. Ao terminar, verifique que renderiza sem erros de console e que claro/escuro alternam corretamente.
