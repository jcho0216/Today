import axios from "axios";
import { Top10SongsType } from "../../interface/Song";

export const getTop10Songs = async () => {
  console.log(import.meta.env);
  const data = await axios.get(`${import.meta.env.VITE_WS_BASE_URL}/music/top10`);

  return data.data.music as Top10SongsType[];
};