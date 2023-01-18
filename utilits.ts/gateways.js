import axios from "axios";

const baseUrl = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetcher = () => {
  axios.get(baseUrl);
};
