'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Seo from '../../../components/Seo';
import { fetchArticleBySlug } from '../../../utils/api';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug) {
      const getArticle = async () => {
        const data = await fetchArticleBySlug(slug as string);
        setArticle(data);
      };

      getArticle();
    }
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Seo
        title={`${article.title} - Articul8`}
        description={article.description}
      />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default BlogPost;
