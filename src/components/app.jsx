import React, { Component } from 'react';
import Chart from './chart';
import ItemList from './item_list';
import Item from './item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      globalskills: [
        {
          label: 'innovation',
          data: [4, 4, 3, 4, 5],
          type: 'div'
        },
        {
          label: 'teamwork',
          data: [4, 4, 3, 4, 5],
          type: 'div'
        },
        {
          label: 'back',
          data: [4, 4, 3, 4, 5],
          type: 'div'
        },
        {
          label: 'front',
          data: [2, 2, 3, 4, 5],
          type: 'div'
        }
      ],
      skills: [
        {
          label: 'devicon-react-original-wordmark colored',
          data: [5, 2, 4, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-ruby-plain-wordmark colored',
          data: [5, 5, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-rails-plain-wordmark colored',
          data: [5, 5, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-python-plain-wordmark colored',
          data: [1, 5, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-css3-plain-wordmark colored',
          data: [4, 4, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-html5-plain-wordmark colored',
          data: [2, 2, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-webpack-plain colored',
          data: [4, 4, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-github-plain-wordmark',
          data: [4, 4, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-jquery-plain-wordmark colored',
          data: [3, 4, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-bootstrap-plain-wordmark colored',
          data: [3, 2, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-slack-plain',
          data: [4, 4, 3, 4, 5],
          type: 'i'
        },
        {
          label: 'devicon-trello-plain colored',
          data: [4, 4, 3, 4, 5],
          type: 'i'
        }
      ],
      selectedSkill:
      {
        label: 'front selected',
        data: [2, 2, 3, 5, 5],
        type: 'div'
      }
    };
  }

  selectSkill = (src, data, type) => {
    this.setState({
      selectedSkill:
      {
        label: `${src} selected`,
        data: [data[0], data[1], data[2], data[3], data[4]],
        type: `${type}`
      }
    });
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
        <div className="render-content">
          <Chart />
          <div className="item-selected" id="selected">
            <Item label={this.state.selectedSkill.label}
                  data={this.state.selectedSkill.data}
                  type={this.state.selectedSkill.type} />
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-list">
            <ItemList skills={this.state.globalskills} selectSkill={this.selectSkill} fixedHeight="skill-list smallHeight" />
            <ItemList skills={this.state.skills} selectSkill={this.selectSkill} fixedHeight="skill-list fixedHeight" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
