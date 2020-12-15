import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="imageContainer">
      {props.products &&
        props.products.map((product, index) => {
          return (
              <div>
                
              <div className="image-wrapper" key={index}>
                <Link to={`/product/${product._id}`}>
                  <img className="image" id={index} src={product.imgURL} alt={product.image} />
                  <h2>{`${product.name}`}</h2>
                  <h3>{`${product.price}`}</h3>
                </Link>
              </div>
             </div>
            
          );
        })}
    </div>
  );
};

export default Products;
