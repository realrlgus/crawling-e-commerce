import axios from "axios";

export const shopApi = {
  items: () => axios.get("items"),
  kmugItems: () => axios.get("kmug_items"),
  itemPrice: () => axios.get("items_price")
};
