import React, { useState, useRef, useEffect } from "react";
import "../styles/productDetails.css";
import { Container, Row, Col } from "reactstrap";

import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import Helmet from "../components/Helmet/Helmet";

import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    // console.log(reviewUserName, reviewUserMsg, rating);
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    if (rating) {
      toast.success("Thank you so much your Feedback");
    }
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
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
                <div className="d-flex align-items-center gap-4">
                  <span className="priceDetails fs-3 ">$ {price}</span>
                  <span> Category : {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buyBtn"
                  onClick={addToCart}
                >
                  Add to Cart!
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tabWrapper d-flex align-items-center gap-5 ">
                <h6
                  id="description"
                  className={`${tab === "desc" ? "activeTab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description!
                </h6>
                <h6
                  id="review"
                  className={`${tab === "rev" ? "activeTab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tabContent mt-3">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="productReview mt-3">
                  <h5>Reviews!</h5>
                  <div className="reviewWrapper mt-3">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <h6 className="mb-1 fs-6 p-1">Johnny Deph</h6>
                          <span>{item.rating}(average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="reviewForm">
                      <h4>Send Your Experience!</h4>
                      <form action="" onClick={submitHandler}>
                        <div className="formGroup">
                          <input
                            type="text"
                            placeholder="Enter your name!"
                            required
                            ref={reviewUser}
                          />
                        </div>

                        <div className="formGroup d-flex align-items-center gap-3">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i class="fa-solid fa-star"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i class="fa-solid fa-star"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i class="fa-solid fa-star"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i class="fa-solid fa-star"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i class="fa-solid fa-star"></i>
                          </motion.span>
                        </div>

                        <div className="formGroup">
                          <textarea
                            row={4}
                            type="text"
                            placeholder="Review Message...!"
                            required
                            ref={reviewMsg}
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          className="buyBtn"
                          type="submit"
                          onClick={submitHandler}
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="relatedTitle">You might also like!</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
