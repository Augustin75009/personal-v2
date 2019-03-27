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
          class: 'back',
          label: ["Ruby", "Rails", "Interêt", "Matlab", "Python"],
          data: [4, 4, 5, 3, 3],
          type: 'div'
        },
        {
          class: 'front',
          label: ["Design", "CSS", "HTML", "Responsive", "Javascript"],
          data: [3, 4, 5, 3, 4],
          type: 'div'
        },
        {
          class: 'teamwork',
          label: ["Altruisme", "Com'", "Partage", "Pédagogie", "Proposition"],
          data: [5, 3, 4, 3, 5],
          type: 'div'
        },
        {
          class: 'innovation',
          label: ["Management", "Créativité", "Autonomie", "Mental", "Réactivité"],
          data: [3, 5, 3, 4, 4],
          type: 'div'
        }
      ],
      skills: [
        {
          class: 'devicon-react-original-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [1, 3, 5, 3, 5],
          type: 'i'
        },
        {
          class: 'devicon-ruby-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 4, 4, 5, 3],
          type: 'i'
        },
        {
          class: 'devicon-rails-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 4, 4, 5, 3],
          type: 'i'
        },
        {
          class: 'devicon-python-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [1, 3, 4, 1, 1],
          type: 'i'
        },
        {
          class: 'devicon-css3-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 3, 5, 5, 5],
          type: 'i'
        },
        {
          class: 'devicon-html5-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 4, 5, 5, 5],
          type: 'i'
        },
        {
          class: 'devicon-webpack-plain colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 3, 4, 1, 3],
          type: 'i'
        },
        {
          class: 'devicon-github-plain-wordmark',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 4, 5, 4, 5],
          type: 'i'
        },
        {
          class: 'devicon-jquery-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 3, 2, 3, 1],
          type: 'i'
        },
        {
          class: 'devicon-bootstrap-plain-wordmark colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 3, 1, 4, 2],
          type: 'i'
        },
        {
          class: 'devicon-slack-plain',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [4, 5, 5, 5, 5],
          type: 'i'
        },
        {
          class: 'devicon-trello-plain colored',
          label: ["Expérience", "Niveau", "Interêt", "Partage", "Utilisation"],
          data: [3, 4, 3, 3, 2],
          type: 'i'
        }
      ],
      selectedSkill:
      {
        class: 'back selected',
        label: ["Ruby", "Rails", "Interêt", "Matlab", "Python"],
        data: [4, 4, 5, 3, 3],
        type: 'div'
      }
    };
  }

  selectSkill = (src, data, type) => {
    this.setState({
      selectedSkill:
      {
        class: `${src} selected`,
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
                  class= {this.state.selectedSkill.class}
                  data={this.state.selectedSkill.data}
                  type={this.state.selectedSkill.type} />
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-list">
          <h3 className="item-title">Profil</h3>
            <ItemList skills={this.state.globalskills}
                      selectSkill={this.selectSkill}
                      fixedHeight="skill-list smallHeight" />
          <h3 className="item-title">Outils</h3>
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