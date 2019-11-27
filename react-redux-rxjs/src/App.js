import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, fetchData, minus, reset } from "./action";
import './App.css';

class App extends Component {

  onFetchClick = () => {
    this.props.fetchData('1');
  };


  constructor(props) {
    super(props);
  }

  render() {
    const { clickTime } = this.props;
    return (
      <div className="App">
        <button onClick={this.props.add}>add</button >
        <button onClick={this.props.minus}>minus</button >
        <button onClick={this.props.reset}>reset</button >
        <button onClick={this.onFetchClick}>call a ajax</button >
        <h1 >{clickTime}</h1 >
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  clickTime: state.clickReducers.clickTime,
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  reset: () => dispatch(reset()),
  fetchData: (index) => dispatch(fetchData(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
