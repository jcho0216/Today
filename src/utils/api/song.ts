import axios from "axios";
import { Top10SongsType } from "../../interface/Song";

export const getTop10Songs = async () => {
  const data = await axios.get(`${import.meta.env.VITE_VERCEL_WS_BASE_URL}/music/top10`);

  return data.data.music as Top10SongsType[];
};
