interface IProjects {}

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

interface ProjectParams {
  params: {
    slug: string;
  };
}

interface ProjectData {
  id: number;
  title: {
    rendered: string;
  };
  acf: any;
  yoast_head_json: {
    title: string;
    description: string;
  };
}
