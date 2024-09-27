import type { Metadata } from 'next';
import React from 'react';
import Seo from '../../components/Seo';
import { fetchArticles } from '../../utils/api';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights and updates from Articul8',
};

async function BlogPage() {
  const articles = await fetchArticles();
  console.log(articles);
  return (
    <div>
      <Seo
        title='Blog - Articul8'
        description='List of blog posts will be fetched from Strapi.'
      />
      <h1>Blog</h1>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={`/blog/${article.slug}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No blog posts available at the moment.</p>
          <p>Please check back later for new content!</p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;