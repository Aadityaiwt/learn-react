import React from 'react';
import {BsCart} from 'react-icons/bs'
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
import "./App.css"

const Sidebar = () => {
  return (
    <aside id="sidebar">

        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3  className="icon icon_header"/> SHOP
            </div>

            <span className="icon icon_close">X</span>
        </div>

        <ul className="sidebar-list">
            <li className="sidebar-list-item">
                <a href="">
                <BsGrid1X2Fill  className="icon icon_header"/> Dashboard
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsFillArchiveFill  className="icon icon_header"/> Products
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsFillGrid3X3GapFill  className="icon icon_header"/> Categories
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsPeopleFill  className="icon icon_header"/> Customers
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsListCheck  className="icon icon_header"/> Inventory
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsMenuButtonWideFill  className="icon icon_header"/> Reports
                </a>
            </li>

            <li className="sidebar-list-item">
                <a href="">
                <BsFillGearFill  className="icon icon_header"/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
