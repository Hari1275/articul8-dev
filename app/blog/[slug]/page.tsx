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
  }
}

export default function BlogPost({ params }: Props) {

}