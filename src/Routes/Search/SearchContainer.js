import React from "react";
import SearchPresenter from "./SearchPresenter";
import { shopApi } from "../../api";

export default class extends React.Component {
  state = {
    items: null,
    priceData: null,
    searchTerm: "",
    error: null,
    type: "List",
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({ searchTerm: value });
  };

  setType = type => {
    try {
      this.setState({
        type: type
      });
    } catch (error) {
      this.setState({ error: "No datas" });
    } finally {
      this.setState({ loading: false });
    }
  };

  searchByTerm = async () => {
    const { searchTerm, type } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await shopApi.search(searchTerm);
      if (data.error) {
        throw Error;
      }
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
        priceData: priceDataArr,
        type
      });
    } catch {
      this.setState({ error: "결과없음", items: null });
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {}
  render() {
    const {
      results,
      searchTerm,
      error,
      loading,
      items,
      priceData,
      type
    } = this.state;
    return (
      <SearchPresenter
        results={results}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        items={items}
        type={type}
        setType={this.setType}
        priceData={priceData}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
