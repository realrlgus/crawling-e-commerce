import React from "react";
import HomePresenter from "./HomePresenter";
import queryString from "query-string";
import { shopApi } from "../../api";

export default class extends React.Component {
  state = {
    items: null,
    priceData: null,
    loading: true,
    error: null
  };
  async componentDidMount() {
    try {
      const {
        history: {
          location: { search }
        }
      } = this.props;
      const value = queryString.parse(search);
      let page = value.page;

      if (!page) {
        page = 1;
      }

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

      this.setState({
        items: data,
        priceData: priceDataArr
      });
    } catch (error) {
      this.setState({ error: "No datas" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { items, priceData, loading } = this.state;
    return (
      <HomePresenter items={items} loading={loading} priceData={priceData} />
    );
  }
}
