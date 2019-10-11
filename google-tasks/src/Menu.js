import React from 'react';
import Berger from './images/berger.png';

const Menu = () => {
  return (
    <div id="Menu">
      <div id="Email">
        <div><img src={Berger} alt="berger" id="Berger"/></div>
        <div>
          <span className="Email-name">The Bergermeister</span>

        <div className="Email-info">
            <span>thebergermeister@arianaberger.com</span>
            <span className="Vertical-align">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Arrow2">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>
        </div>

        </div>
        <div className="Menu-divider2"></div>
      </div>



      <div id="Menu-row-select">My Tasks</div>
      <div className="Menu-row"></div>
      <div className="Menu-row">Grocery List</div>
      <div className="Menu-row">To-Dos</div>



      <div className="Menu-divider"></div>
      <div id="Menu-row2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Add-svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </span>
        <span className="Vertical-align2">
          Create new list
        </span>
      </div>
      <div className="Menu-divider"></div>
      <div className="Menu-row">Illustrations by  <a href="http://tengyulab.com" target="_blank">Teng Yu</a></div>
      <div className="Menu-divider"></div>

    </div>
  )
}

export default Menu;
