import axios from "axios";

const KEY = "AIzaSyBA2gk7vMNBmjVWuKr-fVsDgh0hi08cfgk";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
