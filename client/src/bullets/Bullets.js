import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import items from '../navigation/items';
import './BulletStyles.css';
import { moveToSection } from '../helpers';



class Bullets extends Component {
  render() {
    /* eslint jsx-a11y/click-events-have-key-events: 0 */
    /* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
    return ReactDOM.createPortal(
      <div className="dotstyle dotstyle-dotmove">
        <ul className="dots-list">
          {items.map((item, indx) => (
            <li
              key={item.name}
              data-menuanchor={item.name}
              onClick={() => moveToSection(this.props, indx)}
            >
              <a>{item.name}</a>
            </li>
          ))}
          <li />
        </ul>
      </div>,
      document.getElementById('nav')
    );
  }
}

export default Bullets;
