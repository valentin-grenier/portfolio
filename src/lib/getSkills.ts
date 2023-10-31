import { axiosInstance } from "@/axios/axios";

// Get skills data from backend
export async function getSkills() {
  try {
    const res = await axiosInstance.get(
      "skill?acf_format=standard&_fields=id,title.rendered,acf.icon.url,acf.icon.alt,acf.stack&order=asc&per_page=100"
    );

    if (!res) {
      throw new Error("Failed fetching data");
    }

    const data = await res.data;

    return data;
  } catch (error) {
    return error;
  }
}
