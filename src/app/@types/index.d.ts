export interface IProjects {}

export interface ICardProject {
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

export interface ICarousel {
  projects: ICardProject;
}

export interface ProjectParams {
  params: {
    slug: string;
  };
}

export interface ProjectData {
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
