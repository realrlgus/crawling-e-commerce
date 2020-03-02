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
      let chartArr = [];
      chartData.forEach((item, index) => {
        let site = item.crawlingSite;
        if (index === 0) {
          chartArr.push({ crawlingTime: item.crawlingTime });
          chartArr[index][site] = item.price;
        } else if (index !== 0) {
          const beforeCrawlingTime = chartArr[chartArr.length - 1].crawlingTime;
          if (beforeCrawlingTime !== item.crawlingTime) {
            chartArr.push({ crawlingTime: item.crawlingTime });
          }
          chartArr[chartArr.length - 1][site] = item.price;
        }

        console.log(chartArr);
        return 0;
      });

      this.setState({
        item: data,
        priceData: priceData,
        chartData: chartArr
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
