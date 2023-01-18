import axios from "axios";

const baseUrl = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetcher = (load, set) => {
  load(true);
  axios
    .get(baseUrl)
    .then(({ data }) => set(data))
    .catch((err) => {
      console.log(err);
      Alert.alert("Error", "Go");
    })
    .finally(() => {
      load(false);
    });
};
