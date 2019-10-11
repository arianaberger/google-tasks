import React from 'react';

const Menu = () => {
  return (
    <div id="Menu">
      <div id="Email">
        <div>Image</div>
        <span>The Bergermeister</span>
        <span>thebergermeister@arianaberger.com</span>
      </div>

      <div id="Menu-row-select">My Tasks</div>
      <div className="Menu-row">Grocery List</div>
      <div className="Menu-row">To-Dos</div>

      <div className="Menu-divider"></div>
      <div className="Menu-row">+ Create new list</div>
      <div className="Menu-divider"></div>
      <div className="Menu-row">Illustrations by  <a href="http://tengyulab.com" target="_blank">Teng Yu</a></div>
      <div className="Menu-divider"></div>

    </div>
  )
}

export default Menu;
