import { BASE_URL } from '$lib/constants';
import type { PageServerLoad } from './$types';
interface CandidateInfo {
  id: number;
  electionType: string;
  candidateName: string;
  candidateContactAddress: string;
  candidateInfoImage: string;
  logoImage: string;
}

interface ResponseData {
  data: {
    candidateInfoList: CandidateInfo[];
  };
  transaction_time: string;
  status: string;
  description: string;
  statusCode: number;
  type: string;
}

export const load: PageServerLoad = async ({ params }) => {
  const URL = `${BASE_URL}/candidateInfo/${params.type}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ResponseData = await response.json();
    data.type = params.type;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
