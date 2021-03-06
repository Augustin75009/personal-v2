import React, { Component } from 'react';
import Chart from './chart';
import ItemList from './item_list';
import showArrow from '../../js/showArrow.js';
// import {chartInit, myRadarChart2} from '../../js/chartInit.js';
import setClass from '../../js/setClass.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          class: 'devicon-react-original-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [1, 3, 5, 3, 2],
          type: 'i'
        },
        {
          class: 'devicon-ruby-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 4, 4, 4, 3],
          type: 'i'
        },
        {
          class: 'devicon-rails-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 4, 4, 4, 3],
          type: 'i'
        },
        {
          class: 'devicon-python-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [1, 3, 4, 1, 1],
          type: 'i'
        },
        {
          class: 'devicon-css3-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 3, 5, 4, 5],
          type: 'i'
        },
        {
          class: 'devicon-html5-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 4, 5, 4, 5],
          type: 'i'
        },
        {
          class: 'devicon-webpack-plain colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 3, 4, 1, 3],
          type: 'i'
        },
        {
          class: 'devicon-github-plain-wordmark',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 4, 5, 4, 5],
          type: 'i'
        },
        {
          class: 'devicon-jquery-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
          data: [3, 3, 2, 3, 1],
          type: 'i'
        }
      ],
      selectedSkill:
      {
        class: 'devicon-react-original-wordmark colored selected',
        label: ["Expérience", "Niveau", "Interêt", "Pédagogie", "Utilisation"],
        data: [1, 3, 5, 3, 2],
        type: 'i'
      },
      img:
      {
        status: 'loading'
      }
    };
  }

  // selectSkill = (src, data, type) => {
  //   this.setState({
  //     selectedSkill:
  //     {
  //       class: `${src} selected`,
  //       data: [data[0], data[1], data[2], data[3], data[4]],
  //       type: `${type}`
  //     }
  //   });
  // }

  //   selectSkill = (src) => {
  //   this.setState({
  //     skills[0]:
  //     {
  //       class: `${src} selected`,
  //     }
  //   });
  // }

  // loadedImage = () => {
  //   this.setState({
  //     img: {
  //       status: 'loaded'
  //     }
  //   })
  // }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://res.cloudinary.com/dw7nokc0j/raw/upload/v1566908796/chartInit.js";
    // script.src = "../../js/chartInit.js";
    // script.innerHTML = chartInit + 'chartInit()'

    document.body.appendChild(script);
    // chartInit()
    setClass()
    showArrow()

  }
  render() {
    return (
      <div className="render-wrapper">
        <div className="render-content">
          <div className="chart-wrapper">
            <Chart />
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-list">
            <ItemList skills={this.state.skills}
                      selectSkill={this.selectSkill}
                      fixedHeight="skill-list fixedHeight" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
