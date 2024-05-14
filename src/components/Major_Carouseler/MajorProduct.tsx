import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img
        className="product--image"
        src={props.url}
        alt="product image"
      />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}
