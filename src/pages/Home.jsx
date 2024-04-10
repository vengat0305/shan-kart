import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../src/assets/images/hero-img.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";

const Home = () => {
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    setData(filteredProducts);
  }, []);
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="heroSection">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="heroContent">
                <p className="heroSubtitle">Trending Products in {year} </p>
                <h2>Make Your Interior Minimalistic & Modern</h2>
                <p>
                  Discover the hottest products of the season! From cutting-edge
                  gadgets to stylish accessories, our trending collection has
                  something for everyone. Elevate your lifestyle and stay ahead
                  of the curve with our carefully curated selection. Explore now
                  and redefine what it means to be on-trend.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buyBtn">
                  {" "}
                  <Link to="/Shop">SHOP NOW</Link>{" "}
                  <i class="ri-shopping-bag-line"></i>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="heroImage">
                <img src={heroImg} alt="hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trendingProducts">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="sectionTitle" style={{ fontFamily: "Kalnia" }}>
                Trending Products !
              </h2>
              <p style={{ margin: "10px" }}>
                Trend Analysis: Briefly discuss why these products are trending.
                This might involve mentioning current consumer preferences,
                emerging market trends, or viral marketing campaigns that have
                contributed to their popularity. Availability: Mention where
                customers can purchase these products, whether it's through a
                specific retailer, online marketplace, or directly from the
                manufacturer. Include relevant links or contact information for
                easy access.
              </p>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
