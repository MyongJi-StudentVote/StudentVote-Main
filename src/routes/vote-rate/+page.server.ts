import { BASE_URL } from '$lib/constants';
import type { PageServerLoad } from './$types';
interface VoteData {
  localDateTime: string; // 날짜와 시간을 문자열로 나타냄
  voteCount: number; // 투표 수
  voteRate: number; // 투표율
}

interface ApiResponse {
  data: {
    content: VoteData[];
  };
}

export const load: PageServerLoad = async () => {
  const result: ApiResponse[] = [];
  const deptIds = [1];
  deptIds.forEach(async (id) => {
    const URL = `${BASE_URL}/vote/rate/${id}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content: ApiResponse = await response.json();
      result.push(content);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  });
  return { result: result };
};
