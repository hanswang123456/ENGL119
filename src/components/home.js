import React from "react";
import "./home.css";
import Tile from "./tile";
import SimpleMap from "./map";

export default function Home(props) {
  const p = props.props;

  return (
    <section>
      {p.posting.map((el, i) => {
        if (
          (el.title.toLocaleLowerCase().includes(p.val.toLocaleLowerCase()) ||
            p.val == "") &&
          el.price < p.price &&
          el.rating > p.rating &&
          el.length >= p.term &&
          (el.type == p.type || p.type == "All") &&
          new Date(el.year, el.month, el.day).setHours(0, 0, 0, 0) >=
            new Date(p.start).setHours(0, 0, 0, 0)
        ) {
          return <Tile key={i} posting={el} />;
        }
      })}
    </section>
  );
}
