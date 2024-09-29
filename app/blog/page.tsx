import type { Metadata } from 'next';
import React from 'react';
import { fetchArticles } from '../../utils/api';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights and updates from Articul8',
};

export default async function BlogPage() {
  const { data } = await fetchArticles();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Articul8 Blog',
    description: 'Read the latest insights and updates from Articul8',
    url: 'https://yourdomain.com/blog',
    blogPosts: data.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.attributes.title,
      description: article.attributes.excerpt,
      url: `https://yourdomain.com/blog/${article.attributes.slug}`,
      datePublished: article.attributes.publishDate,
      author: {
        '@type': 'Person',
        name: article.attributes.author,
      },
    })),
  };

  return (
    <>
      <Script
        id='structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <h1>Blog Posts</h1>
        {data.length > 0 ? (
          <ul>
            {data.map((article) => (
              <li key={article.id}>
                <Link href={`/blog/${article.attributes.slug}`}>
                  {article.attributes.title}
                </Link>
                <p>{article.attributes.excerpt}</p>
                <p>
                  By {article.attributes.author} on{' '}
                  {new Date(
                    article.attributes.publishDate
                  ).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </>
  );
}
