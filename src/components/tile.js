import React from "react";
import "./tile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/fontawesome-free-solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Tile(props) {
  const base = props.posting;
  return (
    <div className="postingTile">
      <Slide
        autoplay={false}
        transitionDuration={300}
        infinite={false}
        canSwipe={true}
      >
        <div className="each-slide-effect">
          <div
            className="img"
            style={{ backgroundImage: `url(${base.img[0]})` }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            className="img"
            style={{ backgroundImage: `url(${base.img[1]})` }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            className="img"
            style={{ backgroundImage: `url(${base.img[2]})` }}
          ></div>
        </div>
      </Slide>
      <div className="location">
        {base.title}{" "}
        <span className="rating">
          <FontAwesomeIcon icon="star" /> {base.rating}
        </span>
      </div>
      <div className="location">
        {base.city}, {base.country}{" "}
      </div>
      <div>{base.length} Month Term</div>
      <div>
        Starting {base.day}/{base.month}/{base.year}
      </div>
      <div>
        <span className="price">${base.price} CAD</span> monthly
        <span className="verifiedCheck" style={{display:base.verified? "block":"none"}}>
          {" "}
          <FontAwesomeIcon icon="check" />
        </span>
      </div>
    </div>
  );
}
