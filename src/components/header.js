import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/fontawesome-free-solid";
import Home from "./home";
import postings from "./posting.json";
import Footer from "./footer";
import Calendar from "react-calendar";

export default function Header() {
  const options = ["All", "Apartments", "Townhomes", "Houses"];

  let [searchLoc, setSearchLoc] = useState("");
  let [price, setPrice] = useState(Math.max(...postings.map((el) => el.price)));
  let [rating, setRating] = useState(1);
  let [term, setTerm] = useState(4);
  let [leaseType, setLeaseType] = useState("Sublet");

  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);
  let [start, setStart] = useState(date);
  let [type, setType] = useState(options[0]);
  let [ver, setVer] = useState(false);

  let wordSearch = function (e) {
    setSearchLoc(e.target.value);
  };
  let ratingFilter = function (e) {
    setRating(e.target.value);
  };
  let priceFilter = function (e) {
    setPrice(e.target.value);
  };

  let termFilter = function (e) {
    setTerm(e.target.value);
  };
  let startFilter = function (e) {
    var curr = new Date(e.target.value);
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);
    setStart(date);
  };
  return (
    <div>
      <header>
        <div id="navigation">
          <div className="group" id="logo">
            WaterlooRents
          </div>
          <div className="group">
            <div
              style={{
                backgroundColor: leaseType === "Lease" ? "gray" : "white",
              }}
              onClick={() => setLeaseType("Lease")}
            >
              Rentals
            </div>
            <div
              style={{
                backgroundColor: leaseType === "Sublet" ? "gray" : "white",
              }}
              onClick={() => setLeaseType("Sublet")}
            >
              Sublets
            </div>
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
            <input type="date" onChange={startFilter} value={start} />
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
        <div>
          <select onChange={(e) => setType(e.target.value)} defaultValue={type}>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          <h2>
            {" "}
            Searching{" "}
            <span style={{ backgroundColor: "yellow", color: "black" }}>
              {type}
            </span>{" "}
          </h2>
        </div>
        <div>
          {"Verified? "}
          <br />
          <label class="switch">
            <input type="checkbox" onChange={() => setVer(!ver)} />
            <span class="slid round"></span>
          </label>
        </div>
        <div>
          {"Max Price: " + price}
          <input
            type="range"
            min={Math.min(...postings.map((el) => el.price))}
            max={Math.max(...postings.map((el) => el.price))}
            value={price}
            step={100}
            className="slider"
            id="maxPrice"
            onChange={priceFilter}
          />
        </div>
        <div>
          {"Min Rating: " + rating}
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            className="slider"
            id="minRating"
            onChange={ratingFilter}
          />
        </div>
        <div>
          {"Lease/Sublease Term: " + term + " Months"}
          <input
            type="range"
            min="4"
            max={8}
            step={4}
            value={term}
            className="slider"
            id="maxTerm"
            onChange={termFilter}
          />
        </div>
      </div>

      <section>
        <Home
          props={{
            val: searchLoc,
            price: price,
            rating: rating,
            posting: postings,
            type: type,
            term: term,
            start: start,
            leaseType: leaseType,
            verified: ver,
          }}
        />
      </section>
      <Footer />
    </div>
  );
}
