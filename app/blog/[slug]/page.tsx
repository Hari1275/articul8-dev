import type { Metadata } from 'next';
import { fetchArticleBySlug } from '../../../utils/api';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchArticleBySlug(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export default function BlogPost({ params }: Props) {
  // Your component logic here
}