export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
      width: number;
      height: number;
    };
  };
}

export interface HeroSection {
  title: string;
  description: string;
  image: StrapiImage;
  ctaText: string;
  ctaLink: string;
}

// Add more interfaces for other sections... 