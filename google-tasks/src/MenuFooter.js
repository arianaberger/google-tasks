import React from 'react';
import Plus from './images/google-plus.png';

const MenuFooter = (props) => {

    return (
      <>
      <div className="Col-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Menu-svg" onClick={props.onClickExpandMenu}>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </div>
      <div className="Col-2">
        <img src={Plus} onClick={props.onClickAddTask} alt="google-plus-icon" id="Google-plus"/>
      </div>
      <div className="Col-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="More-svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
      </>
    )
}

export default MenuFooter;
