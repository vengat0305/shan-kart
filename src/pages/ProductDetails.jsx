import React from "react";
import "../styles/productDetails.css";
import { Container, Row, Col } from "reactstrap";

import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";

import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="img" />
            </Col>
            <Col lg="6">
              <div className="productDetails ">
                <h2>{productName}</h2>
                <div className="productRating">
                  <div>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i class="fa-solid fa-star-half"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <span className="priceDetails fs-2   ">$ {price}</span>
                {/* <p className="mt-3">{shortDesc}</p> */}
                <p className="mt-3">{description}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buyBtn">
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
