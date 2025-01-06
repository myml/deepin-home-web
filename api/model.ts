export interface HomeConfig {
  nav: Nav
  seo: Seo
  carousel: Carousel
  reason: Reason
  feature: Feature
  apps: Apps
  footer: Footer
}

export interface Nav {
  menu: Menu[];
}

export interface Menu {
  id?: number;
  name: string;
  url: string;
  children?: Menu[];
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
    repos?: { name: string, url: string }[]
  }[]
}

export interface News {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  }
}

export interface OpenSource {
  commits: number;
  dev: number;
  issues: number;
  pull_request: number;
  repo: number;
  team: number;
  user: number;
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
