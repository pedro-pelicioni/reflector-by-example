import { notFound } from 'next/navigation';
import { getTutorial, getAllTutorialSlugs } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Playground } from '@/components/Playground';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const components = {
  Playground,
};

export async function generateStaticParams() {
  const slugs = await getAllTutorialSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = await getTutorial(slug);
  
  if (!tutorial) {
    return {
      title: 'Not Found',
    };
  }
  
  return {
    title: `${tutorial.metadata.title} - Reflector by Example`,
    description: tutorial.metadata.description,
  };
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = await getTutorial(slug);
  
  if (!tutorial) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto px-8 py-12 prose">
      <MDXRemote
        source={tutorial.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </article>
  );
}

