import React from "react";
import "../../styles/productCard.css";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    // alert("product added to cart");
    toast.success("Product added to cart Successfully!");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="productItem">
        <div className="productImg">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="img" />
        </div>
        <div className="p-2 productInfo">
          <h3 className="productName">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="fa-solid fa-plus"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
