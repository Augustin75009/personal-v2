import React, { Component } from 'react';
import Chart from './chart';
import Item from './item_list';

class App extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "../../chart.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="render-wrapper">
        <Chart />
        <Item />
      </div>
    );
  }
}

export default App;
