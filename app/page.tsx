import Link from 'next/link';
// 1. Importamos nossos dados diretamente do arquivo JSON
import artigosData from '@/data/artigos.json';

// 2. Definimos uma 'type' (tipagem) para o TypeScript entender a estrutura
// dos nossos artigos. Isso ajuda a evitar bugs.
type Artigo = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
  content: string;
};

// 3. Esta é a nossa página! Note que ela é 'async' por padrão.
// Embora não estejamos usando 'await' (porque lemos um arquivo local),
// se estivéssemos a fazer fetch de uma API, faríamos aqui.
export default function HomePage() {
  // 4. Atribuímos nossos dados importados (e tipados) a uma variável
  const artigos: Artigo[] = artigosData;

  return (
    // 5. Usamos classes do Tailwind para centralizar e estilizar o conteúdo
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-gray-900">
          Meu Blog com Next.js
        </h1>
        
        <div className="space-y-6">
          {/* 6. Fazemos um loop (map) em cada artigo e criamos um card */}
          {artigos.map((artigo) => (
            <Link
              href={`/artigos/${artigo.slug}`} // 7. O <Link> nos leva para a rota dinâmica
              key={artigo.id}
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {artigo.title}
              </h2>
              <p className="text-gray-600 text-sm">
                Por {artigo.author} em {artigo.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
