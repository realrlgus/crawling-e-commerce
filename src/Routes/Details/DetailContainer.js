import React from "react";
import DetailPresenter from "./DetailPresenter";
import { shopApi } from "../../api";
export default class extends React.Component {
  state = {
    item: null,
    priceData: null,
    chartData: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        props: {
          match: {
            params: { id }
          }
        }
      } = this;

      const { data } = await shopApi.kmugItemById(id);
      const {
        0: { keyword }
      } = data;
      const { data: priceData } = await shopApi.itemPriceByKeyword(
        keyword.replace("/", "%2F")
      );
      const { data: chartData } = await shopApi.chartDataByKeyword(
        keyword.replace("/", "%2F")
      );

      let priceDataArr = [];

      console.log(priceData);
      // let items = priceData.map(items => items);
      // for (const item in items) {
      //   let keyword = Object.keys(items[item])[0];
      //   let store = Object.keys(Object.values(items[item])[0])[0];
      //   let price = Object.values(Object.values(items[item])[0])[0];
      //   if (typeof priceDataArr[keyword] === "undefined") {
      //     priceDataArr[keyword] = {};
      //   }
      //   priceDataArr[keyword][store] = price;
      // }
      this.setState({
        item: data,
        priceData: priceData,
        chartData: chartData
      });
    } catch (error) {
      this.setState({ error: "오류 발생" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { item, priceData, chartData, loading, error } = this.state;
    return (
      <DetailPresenter
        item={item}
        priceData={priceData}
        chartData={chartData}
        loading={loading}
        error={error}
      />
    );
  }
}
