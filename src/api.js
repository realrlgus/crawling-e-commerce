import axios from "axios";

export const shopApi = {
  items: () => axios.get("/items"),
  kmugItemById: idx => axios.get(`/kmug_items/${idx}`),
  kmugItems: filter => axios.get(`/kmug_items?filter=${filter}`),
  itemPrice: filter => axios.get(`/items_price?filter=${filter}`),
  itemPriceByKeyword: keyword => axios.get(`/items_price/${keyword}`),
  chartDataByKeyword: keyword => axios.get(`/chart_data/${keyword}`),
  getCategory: () => axios.get(`/category`),
  search: text => axios.get(`/search_kmug_items/${text}`)
};
