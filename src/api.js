import axios from "axios";

export const shopApi = {
  items: () => axios.get("/items"),
  kmugItemById: idx => axios.get(`/kmug_items/${idx}`),
  kmugItems: page => axios.get(`/kmug_items?page=${page}`),
  itemPrice: () => axios.get("/items_price"),
  itemPriceByKeyword: keyword => axios.get(`/items_price/${keyword}`),
  chartDataByKeyword: keyword => axios.get(`/chart_data/${keyword}`)
};
