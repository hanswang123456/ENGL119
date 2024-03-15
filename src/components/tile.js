import React from "react";
import "./tile.css";

export default function Tile(props) {
  return (
    <div className="postingTile">
      <img src={props.img} />
      <div>{props.title}</div>;<div>{props.date}</div>;
    </div>
  );
}
