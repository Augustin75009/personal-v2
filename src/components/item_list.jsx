import React, { Component } from 'react';
import Item from './item';

class ItemList extends Component {
  renderList(props) {
    return (
      this.props.skills.map((skill) => {
        return <Item
          skill={skill}
          key={skill}
          selectedSkill={this.props.selectedSkill} />;
      })
    );
  }
  render() {
    return (
      <div className="skill-list">
        {this.renderList()}
      </div>
    );
  }
}

export default ItemList;
