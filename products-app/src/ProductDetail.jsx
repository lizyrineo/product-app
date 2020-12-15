import React from 'react';
import axios from "axios";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  let { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    let getCurrent = async () => {
      let resp = await axios.get(`https://products-api-01.herokuapp.com/api/products/${id}`);
      setCurrentProduct(resp.data);
      console.log(resp.data);
    };
    getCurrent();
  }, []);

  return (
    <div className="description">
      <img className="detail-image" src={currentProduct.imgURL} alt={currentProduct.name} />
      <div className="details">
      <h1 className="detail-name">{currentProduct.name}</h1>
      <h3 className="detail-price">{currentProduct.price}</h3>
      <p className="detail-description">{currentProduct.description}</p>
      </div>
    </div>)
}

export default ProductDetail;
