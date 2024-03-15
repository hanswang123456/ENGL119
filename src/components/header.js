import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/fontawesome-free-solid";
export default function Header(props) {
  return (
    <header>
      <div id="navigation">
        <div className="group" id="logo">
          Waterloo Rents
        </div>
        <div className="group">
          <div>Rentals</div>
          <div>Sublets</div>
          <div>Destinations</div>
        </div>
        <div className="group">
          <div>Add</div>
          <div id="profile">
            <FontAwesomeIcon icon="bars" />
            <br />
            <br />
            <FontAwesomeIcon icon="user" />
          </div>
        </div>
      </div>
      <div id="searchBar">
        <div>
          <label>Where</label>
          <input type="text" placeholder="search destinations" />
        </div>
        |
        <div>
          <label>When</label>
          <input type="date" />
        </div>
        |
        <div>
          <label>Number of Tenants</label>
          <input type="number" defaultValue={1} min="1" />
        </div>
        <button>&#x1F50E;&#xFE0E;</button>
      </div>
    </header>
  );
}
