interface ICardProject {
  map: any;
  id: number;
  slug: string;
  acf: {
    thumbnail: {
      url: string;
      alt: string;
    };
    stacks: string[];
  };
}

interface ICarousel {
  projects: ICardProject;
}
