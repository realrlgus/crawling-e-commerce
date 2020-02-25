import axios from "axios";

export const shopApi = {
  items: () => axios.get("items")
};
