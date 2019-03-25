import React, { Component } from 'react';
import Item from './item';

class ItemList extends Component {
  renderList(props) {
    return (
      this.props.skills.map((skill, index) => {
        return <Item
          label={skill.label}
          data={skill.data}
          type={skill.type}
          key={index}
          selectSkill={this.props.selectSkill} />;
      })
    );
  }
  render() {
    return (
      <div className={this.props.fixedHeight}>
        {this.renderList()}
      </div>
    );
  }
}

export default ItemList;
