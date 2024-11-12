interface FetchOptions {
  url: string;
  method?: string;
  body?: any;
  headers?: HeadersInit;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchAPI({ url, method = 'GET', body, headers = {} }: FetchOptions) {
  try {
    const mergedHeaders = {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      // ...headers,
    };

    const res = await fetch(`${STRAPI_URL}/api${url}`, {
      method,
      headers: mergedHeaders,
      body: body ? JSON.stringify(body) : undefined,
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

// Utility functions for common API calls
export async function getPageData(slug: string) {
  return fetchAPI({
    url: `/pages?filters[slug][$eq]=${slug}&populate=deep`,
  });
}

export async function getBlogPosts(page = 1, pageSize = 10) {
  return fetchAPI({
    url: `/blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
  });
}

export async function getBlogPost(slug: string) {
  return fetchAPI({
    url: `/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
  });
}

export async function getHomePageData() {
  return fetchAPI({
    url: '/home?populate[HeroSection][populate]=*&populate[GlobalEnterprisesSection][populate]=*&populate[FasterTimeSection][populate][MainTitle][populate]=*&populate[FasterTimeSection][populate][Cards][populate]=Icon&populate[FeaturesSection][populate][MainTitle][populate]=*&populate[FeaturesSection][populate][FeatureCards][populate]=Icon&populate[FeaturesSection][populate][CtaButton][populate]=*&populate[FeaturesSection][populate]=Image&populate[GenAiChaosSection][populate][MainTitle]=*&populate[GenAiChaosSection][populate][Cards][populate]=*&populate[LastSection][populate]=*',
  });
}

export async function getHeaderData() {
  return fetchAPI({
    url: '/header?populate[Logo][populate]=*&populate[NavLinks][populate]=*&populate[CtaButton][populate]=*',
  });
}

export async function getFooterData() {
  return fetchAPI({
    url: '/footer?populate[Logo][populate]=*&populate[NavLinks][populate]=*&populate[SocialNavLinks][populate]=*',
  });
}

export async function getAboutPageData() {
  return fetchAPI({
    url: '/about?populate[HeroSection][populate]=*&populate[ImapctSection][populate]=*&populate[CeoSection][populate]=*',
  });
}