import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/fontawesome-free-solid";
import Home from "./home";
import postings from "./posting.json";

export default function Header() {
  let [searchLoc, setSearchLoc] = useState("");
  let [price, setPrice] = useState(5000);
  let [rating, setRating] = useState(1);

  let wordSearch = function (e) {
    setSearchLoc(e.target.value);
  };
  let ratingFilter = function (e) {
    setRating(e.target.value);
  };
  let priceFilter = function (e) {
    setPrice(e.target.value);
  };

  return (
    <div>
      <header>
        <div id="navigation">
          <div className="group" id="logo">
            WaterlooRents
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
            <input
              type="text"
              placeholder="search destinations"
              onChange={wordSearch}
            />
          </div>
          <div className="vSep"></div>
          <div>
            <label>When</label>
            <input type="date" />
          </div>
          <div className="vSep"></div>
          <div>
            <label>Number of Tenants</label>
            <input type="number" defaultValue={1} min="1" />
          </div>
          <button>&#x1F50E;&#xFE0E;</button>
        </div>
      </header>
      <div className="filter">
        {"Max Price: " + price}
        <input
          type="range"
          min="50"
          max={Math.max(...postings.map((el) => el.price))}
          value={price}
          class="slider"
          id="maxPrice"
          onChange={priceFilter}
        />
        {"Min Rating: " + rating}
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          class="slider"
          id="minRating"
          onChange={ratingFilter}
        />
      </div>

      <section>
        <Home
          props={{
            val: searchLoc,
            price: price,
            rating: rating,
            posting: postings,
          }}
        />
      </section>
    </div>
  );
}
