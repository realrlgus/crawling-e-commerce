import React from "react";
import HomePresenter from "./HomePresenter";
import queryString from "query-string";
import { shopApi } from "../../api";
import Pagination from "../../Components/Pagination";

export default class extends React.Component {
  state = {
    items: null,
    priceData: null,
    pages: null,
    page: null,
    loading: true,
    error: null
  };
  renderItems = async page => {
    this.setState({
      loading: true
    });
    try {
      const { data } = await shopApi.kmugItems(page);
      const { data: priceData } = await shopApi.itemPrice();
      let priceDataArr = [];
      let items = priceData.map(items => items);
      for (const item in items) {
        let keyword = Object.keys(items[item])[0];
        let store = Object.keys(Object.values(items[item])[0])[0];
        let price = Object.values(Object.values(items[item])[0])[0];
        if (typeof priceDataArr[keyword] === "undefined") {
          priceDataArr[keyword] = {};
        }
        priceDataArr[keyword][store] = price;
      }

      const pages = [1, 2, 3, 4, 5, 6, 7, 8];
      this.setState({
        items: data,
        pages: pages,
        page: page,
        priceData: priceDataArr
      });
    } catch (error) {
      this.setState({ error: "No datas" });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.renderItems(1);
  }
  render() {
    const { items, priceData, loading, pages, page } = this.state;
    return (
      <HomePresenter
        items={items}
        loading={loading}
        priceData={priceData}
        pagination={this.renderItems}
        pages={pages}
        page={page}
      />
    );
  }
}
