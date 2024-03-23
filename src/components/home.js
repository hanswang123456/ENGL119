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
          el.rating > p.rating
        ) {
          return <Tile key={i} posting={el} />;
        }
      })}
      <SimpleMap />
    </section>
  );
}
