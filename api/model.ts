export interface HomeConfig {
  seo: Seo
  carousel: Carousel
  reason: Reason
  feature: Feature
  apps: Apps
  footer: Footer
}

export interface Seo {
  title: string
  lang: string
  description: string
  keywords: string[]
}

export interface Carousel {
  cards: CarouselCard[]
}

export interface CarouselCard {
  interval: number
  title: string
  content: string
  image: string
  image_link: string
  online_time: string
  downline_time: string
  links: {
    title: string
    url: string
  }[]
}

export interface Reason {
  title: string;
  cards: {
    title: string;
    content: string;
    repos?: { title: string, link: string }[]
  }[]
}

export interface News {
  image: string
  title: string
  content: string
  time: string
}

export interface OpenSource {
  pull_request: number
  commits: number
  contributors: number
  repositories: number
  issues: number
  teams: number
}

export interface Footer {
  navs: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
  qr: {
    title: string;
    imgs: {
      text: string;
      url: string;
      img: string;
    }[];
  };
}

export interface Feature {
  title: string
  content: string
  cards: {
    image: string
    title: string
    content: string
    url: string
    cover: string
  }[]
}

export interface Apps {
  title: string
  content: string
  cards: {
    list: { title: string; image: string; disabled?: boolean; link?: string }[]
    title: string
    content: string
  }[]
}
