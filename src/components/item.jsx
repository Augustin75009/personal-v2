import React, { Component } from 'react';
// import {chartInit, myRadarChart2} from '../../js/chartInit.js';

class Item extends Component {
  picked = (event) => {
    // this.props.selectSkill(this.props.class, this.props.data, this.props.type);
    // this.props.selectSkill(this.props.class);
    // console.log(this.props.class)
    // this.props.skills.map((skill, index) => {
    //   console.log(skill.class)
    // })
    myRadarChart2.data.labels = [this.props.label[0], this.props.label[1], this.props.label[2], this.props.label[3], this.props.label[4]];
    myRadarChart2.data.datasets[0].data = [
      this.props.data[0],
      this.props.data[1],
      this.props.data[2],
      this.props.data[3],
      this.props.data[4]
    ];
    myRadarChart2.update();
  }
  render() {
    if (this.props.type == "i") {
      return (
        <div className="skills-card">
          <i className={this.props.class}
              data-data0={this.props.data[0]}
              data-data1={this.props.data[1]}
              data-data2={this.props.data[2]}
              data-data3={this.props.data[3]}
              data-data4={this.props.data[4]}
              onClick={this.picked} >
          </i>
        </div>
      );
    } else {
      return (
        <div className="skills-card">
          <div className={this.props.class}
              data-data0={this.props.data[0]}
              data-data1={this.props.data[1]}
              data-data2={this.props.data[2]}
              data-data3={this.props.data[3]}
              data-data4={this.props.data[4]}
              onClick={this.picked} >
          </div>
        </div>
      );
    }
  }
}

export default Item;
