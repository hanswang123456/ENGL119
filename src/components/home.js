import React from "react";
import "./home.css";
import Tile from "./tile";

export default function Home() {
  const postings = [
    {
      title: "San Francisco",
      date: new Date(11, 12, 2023),
      img: "https://www.cntraveler.com/gallery/best-things-to-do-in-toronto",
    },
    {
      title: "Toronto",
      date: new Date(8, 12, 2023),
      img: "https://www.cntraveler.com/gallery/best-things-to-do-in-toronto",
    },
  ];

  return (
    <section>
      {postings.map((el) => {
        <Tile props={el} />;
      })}
    </section>
  );
}
