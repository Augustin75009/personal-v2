import React, { Component } from 'react';
import Chart from './chart';
import ItemList from './item_list';
import Item from './item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>',
        '<i className="devicon-css3-plain-wordmark colored"></i>'
      ],
      selectedSkill: '<i className="devicon-css3-plain-wordmark colored"></i>'
    };
  }
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
        <div className="item-wrapper">
          <div className="item-list">
            <ItemList skills={this.state.skills} selectedSkill={this.selectedSkill} />
          </div>
          <div className="item-selected">
            <Item />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
