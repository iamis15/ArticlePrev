import React from "react";
import Facebook from "./images/icon-facebook.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Twitter from "./images/icon-twitter.svg";

export default function ShareComponent() {
  return (
    <section className="shareopt">
      <p>S H A R E</p>
      <img src={Facebook} alt="facebook-img" />
      <img src={Pinterest} alt="pinterest-img" />
      <img src={Twitter} alt="twitter-img" />
      <div className="arrow-down" />
    </section>
  );
}
