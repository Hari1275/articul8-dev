import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

interface BlogPost {
  id: number;
  attributes: {
    slug: string;
    title: string;
    excerpt: string;
    publishDate: string;
    author: string;
    content: string;
    featuredImage?: string;
  };
}

interface BlogResponse {
  data: BlogPost[];
}

export const fetchArticles = async (): Promise<BlogResponse> => {
  try {
    const response = await api.get<BlogResponse>('/api/blogs');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { data: [] };
  }
};

export async function fetchArticleBySlug(
  slug: string
): Promise<BlogPost['attributes']> {
  try {
    const response = await api.get<BlogResponse>(
      `/api/blogs?filters[slug][$eq]=${slug}`
    );
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0].attributes;
    }
    throw new Error('Article not found');
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return {
      title: 'Article not found',
      excerpt: 'The requested article could not be loaded.',
      publishDate: new Date().toISOString(),
      author: 'Unknown',
      content: 'The requested article could not be found.',
      slug: slug,
    };
  }
}
