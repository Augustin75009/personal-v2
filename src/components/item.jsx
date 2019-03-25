import React, { Component } from 'react';

class Item extends Component {
  picked = (event) => {
    this.props.selectSkill(this.props.label, this.props.data, this.props.type);
    myRadarChart2.data.labels = ['Expérience', 'Niveau', 'Goût', 'Test', 'Syntaxe'];
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
          <i className={this.props.label}
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
          <div className={this.props.label}
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
