import type { Metadata } from 'next';
import { fetchArticleBySlug, fetchArticles } from '../../../utils/api';
import Script from 'next/script';

type Props = {
  params: { slug: string };
};

// Define an interface for the blog post data
interface BlogPost {
  attributes: {
    slug: string;
    title: string;
    excerpt: string;
    publishDate: string;
    author: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await fetchArticleBySlug(params.slug);

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
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Article not found',
      description: 'The requested article could not be loaded.',
    };
  }
}

export default async function BlogPost({ params }: Props) {
  try {
    const post = await fetchArticleBySlug(params.slug);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      datePublished: post.publishDate,
      image: post.featuredImage
        ? post.featuredImage
        : 'https://example.com/default-blog-image.jpg',
      url: `https://yourdomain.com/blog/${post.slug}`,
    };

    return (
      <>
        <Script
          id='structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article>
          <h1>{post.title}</h1>
          <p>
            By {post.author} on{' '}
            {new Date(post.publishDate).toLocaleDateString()}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* Add more components for comments, related posts, etc. */}
        </article>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return <div>Error loading article. Please try again later.</div>;
  }
}

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await fetchArticles();
    return posts.data.map((post: BlogPost) => ({
      slug: post.attributes.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
