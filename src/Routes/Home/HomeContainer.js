import React from "react";
import HomePresenter from "./HomePresenter";
import { shopApi } from "../../api";

export default class extends React.Component {
  state = {
    items: null,
    loading: true,
    error: null
  };
  async componentDidMount() {
    try {
      const { data } = await shopApi.items();
      this.setState({
        items: data
      });
    } catch (error) {
      this.setState({ error: "No datas" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { items, loading } = this.state;
    return <HomePresenter items={items} loading={loading} />;
  }
}
