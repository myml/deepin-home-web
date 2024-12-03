export interface HomeConfig {
  carousel: Carousel
  reasonList: { title: string; content: string }[]
  office: Office
  apps: Apps
  footer: Footer
}

export interface Carousel {
  interval: number,
  cards: CarouselCard[]
}

export interface CarouselCard {
  title?: string
  content?: string
  image: string
  image_link?: string
  links?: {
    title: string
    url: string
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

export interface Office {
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
