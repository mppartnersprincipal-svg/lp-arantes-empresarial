# CLAUDE.md — Landing Page | Arantes de Pádua Advogados

> Arquivo de contexto do projeto para o Claude Code.
> Foco: Landing Page de **Direito Empresarial de Cobrança / Recuperação de Crédito**.
> Toda decisão de código e de texto deve respeitar as **Regras de Conformidade OAB** (seção 2). Elas são inegociáveis.

---

## 1. Visão geral

Construir uma landing page de página única, de alta conversão e em conformidade com a publicidade da advocacia (OAB), para o escritório **Arantes de Pádua Advogados**.

- **Objetivo de conversão:** agendar consultoria / reunião.
- **CTA principal:** "Fale com um especialista".
- **Destino dos contatos:** WhatsApp **(62) 99911-3757** → formato internacional `5562999113757`.
- **Tráfego:** a página receberá tráfego pago (Google Ads e Meta Ads). Performance, clareza da mensagem e rastreamento de conversão são prioridade.
- **Métrica de sucesso:** número de leads e fechamento de contrato.
- **Domínio:** https://www.arantesdepadua.com.br/

### Posicionamento
Transparência, competência e confiabilidade. Atuar como **parceiro de negócios** do cliente, não apenas como prestador de serviço pontual.

### Tom de voz
**Profissional, porém acessível.** Explicar o jurídico em linguagem que um empresário leigo entenda. Sóbrio, sem marketing agressivo.

---

## 2. ⚠️ Regras de Conformidade OAB (INEGOCIÁVEIS)

A publicidade de advogados no Brasil é regulada pelo **Código de Ética e Disciplina da OAB** e pelo **Provimento nº 205/2021 do CFOAB**. Todo texto, microcopy, botão, meta tag e título gerado neste projeto DEVE seguir as regras abaixo.

**NÃO usar, em hipótese alguma:**
- ❌ Promessas ou garantia de resultado ("recuperamos seu crédito", "resultado garantido", "100% de êxito").
- ❌ Superlativos e autopromoção comparativa: "melhor", "líder", "nº 1", "o maior", "referência".
- ❌ Termos de marketing agressivo: "garantido", "imperdível", "última chance", "promoção".
- ❌ Divulgação ostensiva de preços, descontos ou promoções de honorários.
- ❌ Depoimentos de clientes que configurem captação de clientela (não incluir prints/áudios/vídeos de clientes nesta LP).
- ❌ Logos de clientes/empresas atendidas (proibido pelo cliente e pelo código de ética).
- ❌ Mercantilização do serviço ou linguagem que estimule litígio.
- ❌ Verbos de captação direta tipo "contrate agora", "compre", "feche já".

**PODE / DEVE usar:**
- ✅ Linguagem informativa e técnica, descrevendo serviços e metodologia.
- ✅ CTA de contato/agendamento: "Fale com um especialista", "Agende uma consultoria", "Converse com nossa equipe".
- ✅ Verbos de atuação, não de garantia: "atuamos para", "buscamos", "trabalhamos pela recuperação".
- ✅ Números de inscrição na OAB no rodapé.
- ✅ Aviso de caráter informativo no rodapé.

**Aviso obrigatório no rodapé:**
> "Conteúdo de caráter meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do CFOAB."

> ℹ️ Toda a copy da seção 6 já foi escrita seguindo estas regras. Ao gerar qualquer texto novo, revalide contra esta lista.

---

## 3. Stack e estrutura

### Stack recomendada
**Astro + Tailwind CSS** — melhor LCP/performance para LP de tráfego pago (Quality Score do Google Ads melhora com página rápida, reduzindo custo por clique), SEO sólido e zero JS desnecessário.

> Alternativa aceitável: **Next.js (App Router) + Tailwind** — o escritório já tem Vercel conectado, então o deploy é direto. Use esta opção se preferir React. Para HTML puro + Tailwind também funciona; mantenha a mesma estrutura de seções.

### Estrutura de pastas sugerida (Astro)
```
/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Problema.astro
│   │   ├── Servicos.astro
│   │   ├── ComoFunciona.astro
│   │   ├── Diferenciais.astro
│   │   ├── FAQ.astro
│   │   ├── FormularioCTA.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppFloat.astro
│   ├── layouts/
│   │   └── Base.astro          # <head>, meta tags, scripts de tracking
│   ├── pages/
│   │   └── index.astro         # monta as seções na ordem da seção 5
│   └── styles/
│       └── global.css          # design tokens / variáveis CSS
├── public/
│   ├── favicon.svg
│   └── og-image.jpg            # imagem de compartilhamento
├── tailwind.config.mjs
└── astro.config.mjs
```

---

## 4. Sistema de design

> ⚠️ **PLACEHOLDER:** as cores e fontes oficiais da marca foram enviadas pelo cliente, mas NÃO estão neste arquivo. **Substituir os tokens abaixo pela identidade visual real antes de finalizar.** O padrão abaixo é um placeholder sóbrio coerente com escritório de advocacia empresarial.

### Tokens de cor (placeholder)
```css
:root {
  --color-primary:        #13293D; /* azul petróleo / navy */
  --color-primary-dark:   #0A1E2B;
  --color-primary-soft:   #1F3A52;
  --color-accent:         #B08D57; /* dourado/bronze sóbrio (detalhes, ícones) */
  --color-accent-dark:    #95743F;
  --color-text:           #1A1F24;
  --color-text-muted:     #5B6770;
  --color-bg:             #FFFFFF;
  --color-bg-soft:        #F5F7F9;
  --color-border:         #E3E8EC;
  --color-success:        #1F8A5B; /* botão WhatsApp */
}
```

### Tipografia (placeholder — trocar pelas fontes da marca)
- **Títulos:** serifada sóbria (ex.: *Lora* ou *Source Serif 4*) → transmite tradição e autoridade.
- **Corpo:** sans-serif legível (ex.: *Inter*).
- Hierarquia: H1 grande e firme; subtítulos com `--color-text-muted`; corpo confortável (16–18px, line-height ~1.6).

### Diretrizes visuais
- Estética limpa, espaçada, "respirável". Muito branco/neutro, uso pontual do dourado em ícones e detalhes — sem excessos.
- Botões primários em `--color-primary`; CTA de WhatsApp em `--color-success`.
- Cantos levemente arredondados (8–12px), sombras suaves.
- Ícones de linha (lucide / heroicons) para os serviços e diferenciais.
- **Nada** de imagens genéricas de banco (martelo de juiz, balança clichê, aperto de mãos batido). Preferir composição tipográfica, ícones e fotos reais do escritório/equipe quando enviadas.

### Responsividade e acessibilidade
- Mobile-first (a maior parte do tráfego pago chega por celular).
- Contraste AA mínimo; foco visível; labels em todos os campos; navegação por teclado.
- Botão flutuante de WhatsApp não pode cobrir conteúdo nem o envio do formulário no mobile.

---

## 5. Estrutura da página (ordem das seções)

Marcadas no briefing como desejadas: **Topo, Serviços, Diferenciais, FAQ, Formulário/CTA, Rodapé.**
Seções marcadas com 🔵 são **recomendações** derivadas do objetivo declarado (convencer o visitante de que tem um problema financeiro relevante) e da principal objeção do cliente — pode-se remover se o cliente preferir, mas tendem a aumentar conversão.

1. **Hero** (topo com chamada principal + CTA) ✅
2. 🔵 **Problema → Solução** (inadimplência consome o caixa)
3. **Serviços** ✅
4. 🔵 **Como funciona** (passo a passo enxuto — neutraliza a objeção de custo/risco)
5. **Diferenciais** ✅
6. **FAQ** ✅
7. **Formulário + CTA final** ✅
8. **Rodapé** (contato, endereço, dados OAB, aviso informativo) ✅
9. **Botão flutuante de WhatsApp** (fixo, presente em toda a página) ✅

> Integração com Mapa do Google **não** foi solicitada — não incluir.

---

## 6. Copy completa (pronta para uso)

> Texto já revisado para conformidade OAB. Pode ser usado como está.

### 6.1 Hero
- **Olho (eyebrow):** Direito Empresarial de Cobrança
- **H1:** Recuperação de crédito e gestão de inadimplência para empresas
- **Subtítulo:** Assessoria jurídica em cobrança extrajudicial e judicial. Atuamos com estratégia, transparência e acompanhamento de cada etapa para reduzir a inadimplência e dar mais previsibilidade ao seu fluxo de caixa.
- **CTA primário:** Fale com um especialista
- **CTA secundário (âncora p/ serviços):** Conheça nossos serviços
- **Linha de confiança:** Arantes de Pádua Advogados • OAB/GO • Atendimento em todo o Brasil

### 6.2 Problema → Solução 🔵
- **H2:** A inadimplência compromete o caixa e o crescimento da sua empresa
- **Texto:** Quando os valores em aberto se acumulam, o impacto vai além do número no relatório: ele atinge o fluxo de caixa, a previsibilidade financeira e a capacidade de investir e crescer. Muitas empresas convivem com uma carteira de inadimplentes cada vez maior, sem processo estruturado de cobrança e sem tempo da equipe para perseguir cada caso.
- **Ponte para a solução:** É exatamente aí que atuamos. Combinamos negociação e medidas jurídicas para tratar a inadimplência de forma estruturada — da análise da carteira ao recebimento — para que créditos parados voltem a ser recursos disponíveis para o seu negócio.
- **CTA:** Fale com um especialista

### 6.3 Serviços
- **H2:** Como podemos ajudar a sua empresa
- **Subtítulo:** Atuação completa em recuperação de crédito e gestão de inadimplência, do extrajudicial ao judicial.

**Cards (título + descrição em linguagem simples):**

1. **Cobrança extrajudicial**
   Negociamos diretamente com o devedor, com notificações e propostas de acordo, buscando o recebimento de forma rápida e preservando o relacionamento comercial.

2. **Ação de cobrança (judicial)**
   Quando a negociação amigável não avança, levamos o caso à Justiça com as medidas adequadas para a cobrança do crédito.

3. **Ação monitória**
   Procedimento judicial mais ágil para cobrar dívidas com prova escrita — como cheques, contratos e notas — com etapas simplificadas.

4. **Assessoria recorrente para gestão de inadimplência**
   Cuidamos da gestão contínua da sua carteira de inadimplentes, com definição de estratégia e relatórios, funcionando como uma extensão do seu setor de cobrança.

5. **Recuperação de crédito e due diligence de devedores**
   Pesquisamos o patrimônio e a capacidade de pagamento dos devedores para definir a estratégia mais adequada e ampliar as chances de recebimento.

6. **Análise e elaboração de contratos**
   Revisamos e estruturamos contratos e políticas de crédito para reduzir o risco de inadimplência antes que ela aconteça.

### 6.4 Como funciona 🔵
- **H2:** Um processo claro, do diagnóstico ao recebimento
- **Subtítulo:** Antes de qualquer medida, avaliamos a viabilidade do seu caso. Você acompanha cada etapa.

1. **Diagnóstico e análise da carteira** — Analisamos os créditos em aberto, o perfil dos devedores e a documentação disponível.
2. **Estratégia personalizada** — Definimos o caminho mais adequado para cada caso, considerando valor, histórico e garantias.
3. **Negociação extrajudicial** — Notificações e propostas de acordo para resolver de forma rápida e menos onerosa.
4. **Medidas judiciais, quando necessário** — Ações de cobrança, monitórias e execução, com pesquisa e localização de bens.
5. **Acompanhamento e prestação de contas** — Você é informado da evolução até o encerramento, com transparência em todas as etapas.

- **CTA:** Agende uma consultoria

### 6.5 Diferenciais
- **H2:** Por que escolher o Arantes de Pádua

- **Atuação rápida e estratégica** — Tratamos cada crédito com agilidade e um plano definido.
- **Acompanhamento contínuo** — Processos organizados e atualização sobre o andamento de cada caso.
- **Atendimento próximo e personalizado** — Soluções desenhadas para a realidade da sua empresa.
- **Negociação + medidas jurídicas** — Combinamos os dois caminhos para tratar a recuperação de ativos.
- **Segurança jurídica e transparência** — Clareza nas condições e nas etapas, do início ao encerramento.
- **Visão de parceiro de negócios** — Mais do que resolver conflitos, ajudamos a estruturar a saúde financeira do negócio.

### 6.6 FAQ
- **H2:** Perguntas frequentes

1. **Como funcionam os honorários?**
   As condições são definidas de forma transparente já no atendimento inicial, de acordo com o caso. Trabalhamos, em regra, com modelo baseado em percentual sobre o valor recuperado.

2. **Vou gastar mais do que vou recuperar?**
   Antes de qualquer medida, fazemos um diagnóstico do caso — documentação, perfil do devedor e viabilidade. Com base nisso, indicamos a estratégia mais adequada e o custo-benefício de cada caminho, para você decidir com clareza.

3. **Quem vocês atendem?**
   Atendemos empresas (Pessoa Jurídica) de todos os portes — de micro e pequenas a médias e grandes, em diversos segmentos como comércio, serviços, indústria, distribuidoras, transporte e logística, saúde, educação, imobiliárias, tecnologia e agronegócio — e também pessoas físicas com carteira de inadimplência a recuperar.

4. **Vocês atendem em todo o Brasil?**
   Sim. Atendemos clientes em todo o território nacional.

5. **Quais documentos preciso reunir?**
   Em geral, contratos, notas promissórias, cheques, duplicatas, confissões de dívida e demais documentos que comprovem o crédito. No diagnóstico inicial orientamos exatamente o que é necessário para o seu caso.

6. **Quanto tempo leva para recuperar um crédito?**
   O prazo varia conforme o caso, a via adotada (extrajudicial ou judicial) e o perfil do devedor. Na análise inicial explicamos os cenários possíveis para o seu caso específico.

### 6.7 Formulário + CTA final
- **H2:** Fale com um especialista
- **Subtítulo:** Conte rapidamente sobre o seu caso. Retornamos o contato pelo WhatsApp para agendar uma consultoria.

**Campos (todos com label visível):**
- Nome *(obrigatório)*
- Empresa *(obrigatório)*
- E-mail *(obrigatório)*
- Telefone / WhatsApp *(obrigatório)*
- Mensagem / descrição do caso *(textarea)*
- ☑️ Checkbox de consentimento LGPD *(obrigatório)* — texto: "Autorizo o contato e o tratamento dos meus dados conforme a Política de Privacidade." (link para a política)

> NÃO incluir o campo "valor aproximado em aberto" (não solicitado).

- **Botão:** Enviar pelo WhatsApp
- **Microcopy abaixo do botão:** Seus dados são tratados com confidencialidade.

### 6.8 Rodapé
```
Arantes de Pádua Advogados

João Paulo Elias de Pádua — OAB/GO 64.110
Matheus Arantes e Silva Pereira — OAB/GO 57.995

Edifício Aquarius Center Empresarial
R. T-36, nº 3.182, St. Bueno — Goiânia/GO, 74223-052
12º andar, sala 1.208

(62) 99911-3757
arantesdepadua@outlook.com
Instagram: @arantesdepadua
Atendimento em todo o Brasil

[Política de Privacidade]   [Voltar ao topo]

— aviso —
Conteúdo de caráter meramente informativo, em conformidade com o
Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do CFOAB.

© {ano} Arantes de Pádua Advogados. Todos os direitos reservados.
```

---

## 7. Formulário → integração WhatsApp

Não há backend obrigatório: o destino dos contatos é o WhatsApp. Fluxo recomendado:

1. Validar os campos no front (todos obrigatórios + consentimento LGPD marcado).
2. Ao enviar, **disparar os eventos de conversão** (ver seção 8).
3. Montar a mensagem pré-preenchida e abrir o WhatsApp em nova aba.

```js
const numero = "5562999113757";
const texto =
`Olá! Vim pela landing page e gostaria de agendar uma consultoria.
Nome: ${nome}
Empresa: ${empresa}
E-mail: ${email}
Telefone: ${telefone}
Caso: ${mensagem}`;

const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
window.open(url, "_blank");
```

> Opcional (recomendado para tráfego pago): além de abrir o WhatsApp, enviar o lead também por e-mail/webhook (ex.: serviço de formulário ou função serverless na Vercel) para não depender só do clique no WhatsApp e ter registro do lead. Confirmar com o cliente se desejam captura paralela.

---

## 8. Tracking de Ads (Google + Meta)

A página roda com tráfego pago, então o rastreamento de conversão é essencial.

- Incluir **Google Tag Manager** (ou GA4 direto) e **Meta Pixel** no `<head>` do layout base. *(Inserir os IDs reais — placeholders por enquanto: `GTM-XXXXXXX`, `G-XXXXXXXXXX`, Pixel `XXXXXXXXXXXXXXX`.)*
- Disparar evento de conversão em:
  - Envio do formulário (`generate_lead` / `Lead`).
  - Clique no botão flutuante de WhatsApp e nos CTAs de WhatsApp (`contact` / `Contact`).
- Marcar os botões com `data-` attributes ou IDs estáveis para facilitar o disparo dos eventos.

---

## 9. SEO / meta tags

```
<title>Recuperação de Crédito Empresarial | Arantes de Pádua Advogados</title>
<meta name="description" content="Assessoria jurídica em cobrança extrajudicial e judicial e gestão de inadimplência para empresas em todo o Brasil. Fale com um especialista.">
canonical: https://www.arantesdepadua.com.br/
Open Graph + Twitter Card com og-image.jpg
lang="pt-BR"
```
- Headings semânticos (um único H1).
- Schema.org `LegalService` / `Attorney` com nome, endereço e telefone (bom para SEO local).

---

## 10. Botão flutuante de WhatsApp

- Fixo no canto inferior direito, presente em toda a página.
- Cor `--color-success`, ícone do WhatsApp, área de toque ≥ 48px.
- Mesmo destino da seção 7 (com mensagem pré-preenchida mais curta: "Olá! Vim pela landing page e gostaria de falar com um especialista.").
- Disparar evento de conversão ao clicar (seção 8).

---

## 11. Pendências / próximos passos

Itens que dependem do cliente ou de definição antes do go-live:

- [ ] **Identidade visual oficial** — aplicar logo, cores e fontes da marca (substituir os placeholders da seção 4). Os arquivos já foram enviados pelo cliente.
- [ ] **Política de Privacidade / LGPD** — ainda não existe e será necessária. Criar a página `/politica-de-privacidade` e linkar no formulário e no rodapé.
- [ ] **IDs de tracking** — inserir GTM/GA4 e Meta Pixel reais.
- [ ] **Fotos** — equipe/escritório, se forem enviadas, para a seção Hero ou Diferenciais.
- [ ] **Validar copy com o advogado responsável** — confirmar, conforme a nota do briefing, o que pode ser exibido sobre honorários e números, mantendo conformidade com a OAB.
- [ ] **Captura paralela do lead** — decidir se haverá registro do lead além do WhatsApp (e-mail/CRM/planilha).
- [ ] **Deploy** — domínio https://www.arantesdepadua.com.br/ (hospedagem própria ou Vercel).

---

## 12. Dados de referência (briefing)

- **Escritório:** Arantes de Pádua Advogados — +3 anos (sócios somam +10 anos de atuação).
- **Sócios:** João Paulo Elias de Pádua (OAB/GO 64.110) e Matheus Arantes e Silva Pereira (OAB/GO 57.995).
- **Endereço:** Edifício Aquarius Center Empresarial — R. T-36, nº 3.182, St. Bueno, Goiânia/GO, 74223-052, 12º andar, sala 1.208.
- **Contato:** (62) 99911-3757 • arantesdepadua@outlook.com • @arantesdepadua.
- **Decisores:** os dois sócios.
- **Público:** empresas (PJ) com necessidade recorrente de recuperação de crédito e, também, pessoas físicas com carteira de inadimplência a recuperar.
- **Principal dor:** perda de ativos por inadimplência, comprometendo fluxo de caixa, previsibilidade e crescimento.
- **Principal objeção:** "Vou gastar mais do que vou recuperar."
