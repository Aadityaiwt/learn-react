import React from 'react';
import { Link } from "react-router-dom";
import {BsCart} from 'react-icons/bs'
import {  } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from "react-icons/bs";

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>

        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3  className="icon icon_header"/> SHOP
            </div>

            <span className="icon icon_close" onClick={OpenSidebar}>X</span>
        </div>

        <ul className="sidebar-list">

          <li className="sidebar-list-item">
            <Link to="/">
              <BsGrid1X2Fill className="icon icon_header"/> Dashboard
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/products">
              <BsFillArchiveFill className="icon icon_header"/> Products
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/categories">
              <BsFillGrid3X3GapFill className="icon icon_header"/> Categories
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/customers">
              <BsPeopleFill className="icon icon_header"/> Customers
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/inventory">
              <BsListCheck className="icon icon_header"/> Inventory
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/reports">
              <BsMenuButtonWideFill className="icon icon_header"/> Reports
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="/setting">
              <BsFillGearFill className="icon icon_header"/> Setting
            </Link>
          </li>

        </ul>
    </aside>
  )
}

export default Sidebar
