import React from 'react';
import {Menu, MoreVert, Add} from '@material-ui/icons';

const MenuFooter = () => {
  return (
    <>
    <div className="Menu-footer">
      <div className="Col-1"><Menu /></div>
      <div className="Col-2"><Add /></div>
      <div className="Col-3"><MoreVert /></div>
    </div>
    </>
  )
}

export default MenuFooter;
