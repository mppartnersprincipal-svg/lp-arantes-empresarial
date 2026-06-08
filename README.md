# Landing Page — Arantes de Pádua Advogados

Landing page de página única para **Direito Empresarial de Cobrança / Recuperação de Crédito**.
Construída em **HTML + CSS + JS puro** (zero dependências de runtime) aplicando o **Design System oficial** (esmeralda + platina).

## Arquivos
```
index.html      → a página (todas as seções + SEO + Schema.org + tracking)
styles.css      → tokens do Design System + componentes + layout da LP
main.js         → nav, menu mobile, FAQ, formulário → WhatsApp e disparo de conversões
assets/         → equipe.webp (hero), logo-ap-mark.webp, og-image.jpg, retratos
```

## Como visualizar
Servidor estático na raiz do projeto, ex.:
```
npx serve .
```
ou a extensão **Live Server** do VSCode sobre `index.html`.

## Seções (ordem do briefing)
Hero → Problema/Solução → Serviços → Como funciona → Diferenciais → FAQ → Formulário/CTA → Rodapé → Botão flutuante de WhatsApp.

## Conformidade OAB
Toda a copy segue o Código de Ética da OAB e o Provimento nº 205/2021 (sem promessa de resultado, sem superlativos, sem depoimentos/logos de clientes). O aviso obrigatório está no rodapé. **Revalidar qualquer texto novo** contra a seção 2 do `CLAUDE (1).md`.

## Formulário → WhatsApp
Valida os campos (todos obrigatórios + consentimento LGPD), dispara a conversão e abre o WhatsApp **(62) 99911-3757** (`5562999113757`) com mensagem pré-preenchida. Sem backend.

## Pendências antes do go-live
- [ ] **IDs de tracking** — descomentar e inserir GTM/GA4 e Meta Pixel no `<head>` do `index.html` (placeholders `GTM-XXXXXXX`, `G-XXXXXXXXXX`, Pixel `XXXXXXXXXXXXXXX`). Os eventos `generate_lead` (form) e `contact` (cliques de WhatsApp) já são empurrados para o `dataLayer` por `main.js`.
- [ ] **Política de Privacidade** — criar a página `/politica-de-privacidade` (linkada no formulário e no rodapé).
- [ ] **Captura paralela do lead** (opcional) — decidir se haverá registro além do WhatsApp (e-mail/webhook/CRM). Ver seção 7 do briefing.
- [ ] **Validar copy de honorários** com o advogado responsável.
- [ ] **Deploy** — domínio https://www.arantesdepadua.com.br/ (Vercel ou hospedagem própria). Atualizar as URLs absolutas de OG/canonical se o domínio mudar.

## Imagens
As fotos do hero/OG foram geradas a partir de `Fotos dos Advogados/Fotos dos Dois.jpg` e otimizadas em WebP para bom LCP (tráfego pago). Para regenerar, ver os comandos `ffmpeg` usados (scale + libwebp quality ~84).
