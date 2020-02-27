import axios from "axios";

export const shopApi = {
  items: () => axios.get("/items"),
  kmugItemById: idx => axios.get(`/kmug_items/${idx}`),
  kmugItems: () => axios.get("/kmug_items"),
  itemPrice: () => axios.get("/items_price"),
  itemPriceByKeyword: keyword => axios.get(`/items_price/${keyword}`),
  chartDataByKeyword: keyword => axios.get(`/chart_data/${keyword}`)
};
