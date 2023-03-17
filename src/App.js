import React, { useState } from "react";
import Drawers from "./images/drawers.jpg";
import Profile from "./images/avatar-michelle.jpg";
import Share from "./images/icon-share.svg";
import ShareComponent from "./ShareComponent";

export default function App() {
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({ bg: {}, fg: {} });

  const handleClick = () => {
    setActive(!active);
    setStyle(() => ({
      bg: { backgroundColor: !active && "hsl(217, 19%, 35%)" },
      fg: { filter: !active && "brightness(3)" },
    }));
  };
  return (
    <main className="main">
      <img src={Drawers} alt="drawers-img" />
      <section className="content">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <section className="profile">
          <img src={Profile} alt="profile-img" />
          <section className="credentials">
            <h6>Michelle Appleton</h6>
            <p>28 Jun 2020</p>
          </section>
          <section style={style.bg} onClick={handleClick} className="share">
            <img style={style.fg} src={Share} alt="share-img" />
            {active && <ShareComponent />}
          </section>
        </section>
      </section>
    </main>
  );
}
