# Meu Blog com Next.js 15 (App Router)  

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) 
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-blue?logo=tailwind-css) 
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

Um blog simples desenvolvido com **Next.js 15**, utilizando **App Router**, **Server Components** e **SSG**, com foco em **SEO dinâmico**, rotas dinâmicas e performance.

🔗 **Deploy**: [meu-blog-chi-three.vercel.app](https://meu-blog-chi-three.vercel.app)

---

## 🚀 Tecnologias e Conceitos

- **Next.js 15** – App Router como estrutura principal  
- **TypeScript** – Tipagem e segurança  
- **Tailwind CSS + Typography** – Estilização moderna e formatação automática (`.prose`)  
- **Rotas Dinâmicas** – `app/artigos/[slug]/page.tsx`  
- **Server Components** – Dados carregados do `data/artigos.json` diretamente no servidor  
- **SSG** – Pré-renderização de páginas com `generateStaticParams`  
- **SEO Dinâmico** – Metadados únicos para cada artigo (`generateMetadata`)  

---

## 📂 Estrutura do Projeto

app/
├─ page.tsx # Home - lista todos os artigos
├─ artigos/
│ └─ [slug]/page.tsx # Página de cada artigo
data/
└─ artigos.json # "Banco de dados" local

yaml
Copiar código

---

## 💻 Rodando Localmente

```bash
git clone https://github.com/Luanagroth/meu-blog.git
cd meu-blog
npm install
npm run dev
Abra http://localhost:3000 no navegador.

🌐 Deploy
O projeto foi publicado na Vercel:
https://meu-blog-chi-three.vercel.app