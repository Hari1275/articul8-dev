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
    url: '/home?populate[0]=HeroSection&populate[1]=HeroSection.HeroImage&populate[2]=GlobalEnterprisesSection&populate[3]=GlobalEnterprisesSection.Enterprises&populate[4]=FasterTimeSection&populate[5]=FasterTimeSection.MainTitle&populate[6]=FasterTimeSection.Cards&populate[7]=FasterTimeSection.Cards.Icon&populate[8]=FeaturesSection&populate[9]=FeaturesSection.MainTitle&populate[10]=FeaturesSection.FeatureCards&populate[11]=FeaturesSection.FeatureCards.Icon&populate[12]=FeaturesSection.CtaButton&populate[13]=FeaturesSection.Image&populate[14]=InnovationsSection&populate[15]=InnovationsSection.MainTitle&populate[16]=InnovationsSection.InnovationCards&populate[17]=InnovationsSection.InnovationCards.Icon&populate[18]=InnovationsSection.InnovationCards.HoverIcon&populate[19]=InnovationsSection.InnovationCards.Contents&populate[20]=InnovationsSection.InnovationCards.Contents.Icon&populate[21]=InnovationsSection.InnovationCards.Contents.HoverIcon&populate[22]=GenAiChaosSection&populate[23]=GenAiChaosSection.MainTitle&populate[24]=GenAiChaosSection.Cards&populate[25]=GenAiChaosSection.Cards.Icon&populate[26]=LastSection&populate[27]=LastSection.CtaButton&populate[28]=LastSection.Image',
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
    url: '/about?populate[0]=HeroSection&populate[1]=HeroSection.BannerVideo&populate[2]=ImapctSection&populate[3]=ImapctSection.mainTitle&populate[4]=ImapctSection.Image&populate[5]=CeoSection&populate[6]=CeoSection.Image&populate[7]=ClutureAndValuesSection&populate[8]=ClutureAndValuesSection.ClutureAndValueCards&populate[9]=ClutureAndValuesSection.ClutureAndValueCards.Icon&populate[10]=HumbleGangstersSection&populate[11]=HumbleGangstersSection.MainTitle&populate[12]=HumbleGangstersSection.HumbleGangsterCards&populate[13]=HumbleGangstersSection.HumbleGangsterCards.Image&populate[14]=HumbleGangstersSection.Images&populate[15]=HumbleGangstersSection.BannerVideo&populate[16]=LastSection&populate[17]=LastSection.MainTitle&populate[18]=LastSection.CtaButton',
  });
}

export async function getProductPageData() {
  return fetchAPI({
    url: '/product?populate[0]=HeroSection&populate[1]=HeroSection.MainTitle&populate[2]=HeroSection.Image&populate[3]=ProductWorksSection&populate[4]=ProductWorksSection.MainTitle&populate[5]=ProductWorksSection.Image&populate[6]=ProductWorksSection.ProductWorkCards&populate[7]=ProductWorksSection.ProductWorkCards.Icon&populate[8]=ProductWorksSection.ProductWorkCards.Environments.Icon&populate[9]=ProductWorksSection.ProductWorkCards.SupportedGPUAccelerators&populate[10]=ProductLiftingSection&populate[11]=ProductLiftingSection.ProductLiftingCards&populate[12]=ProductLiftingSection.ProductLiftingCards.BasicDetail&populate[13]=ProductLiftingSection.ProductLiftingCards.KeyFeatures&populate[14]=ProductLiftingSection.ProductLiftingCards.KeyFeatures.Points&populate[15]=ProductLiftingSection.MainTitle&populate[16]=ProductPlansSection&populate[17]=ProductPlansSection.Points&populate[18]=ProductPlansSection.Points.SubPoints&populate[19]=ProductPlansSection.Points.SubPoints.SubPointItems&populate[20]=ProductPlansSection.A8Expert.CtaButton&populate[21]=ProductPlansSection.A8Enterprise.CtaButton&populate[22]=ProductPlansSection.A8Essential.CtaButton',
  });
}

export async function getFormData() {
  return fetchAPI({
    url: '/form',
  });
}

export async function getCaseStudyPageData() {
  return fetchAPI({
    url: '/case-study?populate[0]=CaseStudies&populate[1]=CaseStudies.BasicDetail&populate[2]=CaseStudies.BasicDetail.Logo&populate[3]=CaseStudies.BasicDetail.Image&populate[4]=CaseStudies.PercentageCards&populate[5]=CaseStudies.Outcomes&populate[6]=LastSection.Image&populate[7]=LastSection.Button',
  });
}

// Add this utility function
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric character with a hyphen
    .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
    .trim();
}