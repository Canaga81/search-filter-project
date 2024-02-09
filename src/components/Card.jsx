import React from "react";
import { FaStar } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
      />

      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />

          <span className="total-reviews">4</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>$300</del> $200
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
