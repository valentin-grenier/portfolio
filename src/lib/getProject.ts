import { axiosInstance } from "@/axios/axios";

// Async function fetching data from backend
export async function getProject(slug: string): Promise<ProjectData> {
  try {
    const res = await axiosInstance.get(
      `projects?slug=${slug}&acf_format=standard`
    );

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
