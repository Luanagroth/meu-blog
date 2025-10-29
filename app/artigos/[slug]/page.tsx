import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// 1. Importamos nossos dados
import artigosData from '@/data/artigos.json';

// Interface para definir o tipo dos nossos dados
interface Artigo {
  id: number;
  slug: string;
  title: string; 
  author: string; 
  date: string; // <-- MUDANÇA: de 'data' para 'date'
  content: string;
}

// 2. generateStaticParams (Geração Estática)
export async function generateStaticParams() {
  const artigos: Artigo[] = artigosData;
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// 3. generateMetadata (SEO Dinâmico)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  
  const { slug } = await params;
  const artigos: Artigo[] = artigosData;
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${artigo.title} | Meu Blog`,
    description: artigo.content.substring(0, 150) + '...',
  };
}


// 4. A PÁGNA (Server Component)
export default async function ArtigoPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  
  const { slug } = await params;
  const artigos: Artigo[] = artigosData;
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    notFound();
  }

  const htmlContent = artigo.content
    .split('\n\n') 
    .map(p => `<p>${p.replace(/\n/g, '<br />')}</p>`) 
    .join(''); 

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      
      <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline mb-8 block">
        &larr; Voltar para a Home
      </Link>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        {artigo.title}
      </h1>
      
      {/* MUDANÇA: de 'artigo.data' para 'artigo.date' */}
      <p className="text-gray-600 mb-8">
        Por {artigo.author} em {artigo.date}
      </p>

      <div 
        className="prose prose-lg prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </main>
  );
}

