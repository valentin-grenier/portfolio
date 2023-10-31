import { ICardProject } from "@/app/@types";
import { axiosInstance } from "@/axios/axios";

// Get projects data from backend
export async function getProjects(): Promise<ICardProject[]> {
  try {
    const res = await axiosInstance.get(
      "projects?acf_format=standard&per_page=4"
    );

    if (!res.data || !Array.isArray(res.data)) {
      throw new Error("Failed fetching data");
    }

    return res.data as ICardProject[];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it elsewhere, or handle it appropriately.
  }
}
