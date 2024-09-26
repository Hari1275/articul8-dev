'use client';

import React, { useEffect, useState } from 'react';
import Seo from '../../components/Seo';
import { fetchArticles } from '../../utils/api';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      if (Array.isArray(data)) {
        setArticles(data);
      } else {
        setArticles([]);
      }
      setLoading(false);
    };

    getArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Seo
        title='Blog - Articul8'
        description='List of blog posts will be fetched from Strapi.'
      />
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/blog/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
