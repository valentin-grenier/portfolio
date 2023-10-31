import { axiosInstance } from "@/axios/axios";

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

// Async function fetching data from backend
export async function getProject(slug: string): Promise<ProjectData> {
  try {
    const res = await axiosInstance.get(`projects?slug=${slug}`);

    if (res.status !== 200) {
      throw new Error("Failed fetching data from backend");
    }

    const data = await res.data;

    return data[0];
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
