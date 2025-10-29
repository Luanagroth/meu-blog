Meu Blog com Next.js 15 (App Router)

Este projeto é um blog simples desenvolvido com Next.js 15 (utilizando o App Router). O objetivo foi praticar os conceitos modernos de Data Fetching (com Server Components), Geração Estática (SSG) e SEO Dinâmico.

Os artigos são carregados a partir de um arquivo JSON local e as páginas de cada artigo são geradas dinamicamente.

✨ Tecnologias e Conceitos Praticados

Next.js 15: Utilizando o App Router.

TypeScript: Para tipagem do projeto.

Tailwind CSS: Para estilização moderna e responsiva.

Plugin @tailwindcss/typography: Para formatação automática de conteúdo de blog (classe .prose).

Rotas Dinâmicas: Criação da rota app/artigos/[slug]/page.tsx para exibir posts individuais.

Server Components: Busca e renderização de dados (do data/artigos.json) diretamente no servidor, de forma assíncrona.

Geração Estática (SSG): Uso da função generateStaticParams para pré-renderizar todas as páginas de artigos no momento do build, garantindo performance máxima.

SEO Dinâmico: Uso da função generateMetadata para criar <title> e <meta description> únicas para cada página de artigo, melhorando a indexação.

🚀 Como Rodar o Projeto Localmente

Clone o repositório:

git clone [https://github.com/](https://github.com/)[SEU-USUARIO]/[SEU-REPOSITORIO].git
cd [SEU-REPOSITORIO]


Instale as dependências:
(Use npm, yarn ou pnpm conforme sua preferência)

npm install


Rode o servidor de desenvolvimento:

npm run dev


Abra http://localhost:3000 no seu navegador para ver o resultado.

📂 Estrutura Principal

O projeto utiliza a estrutura simplificada do App Router:

app/page.tsx: A página inicial (Home) que lista todos os artigos.

app/artigos/[slug]/page.tsx: A Rota Dinâmica. É o "molde" responsável por exibir cada artigo individualmente, buscando os dados com base no slug da URL.

data/artigos.json: Nosso "banco de dados" local, um arquivo JSON simples de onde os Server Components buscam as informações.

🌐 Deploy

O projeto foi publicado na Vercel. O processo é automático: basta importar o repositório do GitHub na plataforma Vercel e clicar em "Deploy".