import React from "react";
import { FaStar } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, prevPrice, newPrice, reviews, star }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={img}
      />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}

          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>${prevPrice}</del> ${newPrice}
          </div>

          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
