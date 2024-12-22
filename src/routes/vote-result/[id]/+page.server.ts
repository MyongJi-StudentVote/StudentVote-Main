import { BASE_URL } from "../../../lib/constants.ts";
import type { PageServerLoad } from "./$types";

interface ResponseData {
  data: {
    departmentName: string;
    resultImageUrl: string;
  };
  transaction_time: string;
  status: string;
  description: string;
  statusCode: number;
}

export const load: PageServerLoad = async ({ params }) => {
  const URL = `${BASE_URL}/vote/result/2`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ResponseData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
