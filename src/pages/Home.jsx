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
import countImage from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrending] = useState([]);

  const [bestSalesProducts, setBestSaleProducts] = useState([]);

  const [mobileProducts, setMobileProducts] = useState([]);

  const [wirelessProducts, setWirelessProducts] = useState([]);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrending(filteredTrendingProducts);
    setBestSaleProducts(filteredBestSaleProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
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
                <h2>Make Your Interior Minimalistic & Modern !</h2>
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
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="bestSales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="sectionTitle" style={{ fontFamily: "Kalnia" }}>
                Best Sales !
              </h2>
              <p style={{ margin: "10px" }}>
                Showcase the top-selling products or services that are currently
                on sale. Include a brief description of each item, emphasizing
                their key features or benefits.Clearly outline the discount or
                promotion associated with each product. This could be a
                percentage off the original price, a specific dollar amount
                discount, or a buy-one-get-one Shopyfy offer.Identify the
                product categories or sections of the store where the best sales
                are happening. This could include electronics, apparel, home
                goods, etc.,
              </p>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timerCount">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="clockTopContent">
                <h4 className="text-white fs-6">Limited Offer !</h4>
                <h3 className="text-white fs-5 mb-3 ">Quality ArmChair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buyBtn storeBtn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" sm="6" className="text-end">
              <img className="counterImage" src={countImage} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="newArrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="sectionTitle" style={{ fontFamily: "Kalnia" }}>
                New Arrivals !
              </h2>
              <p style={{ margin: "10px" }}>
                Product Descriptions: Provide brief descriptions of the new
                products, highlighting their unique features, designs, or
                functionalities. This helps customers understand what sets these
                items apart from existing inventory. Visual Showcase: Include
                high-quality images or videos of the new arrivals to visually
                engage customers and give them a clear idea of what the products
                look like. Visuals should showcase key details and angles of
                each item.
              </p>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popularCategory">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="sectionTitle" style={{ fontFamily: "Kalnia" }}>
                Popular in Category !
              </h2>
              <p style={{ margin: "10px" }}>
                Describing all popular products in detail would be quite an
                extensive task since there are countless products across various
                categories that could be considered popular. However, I can
                provide a general overview of some broad categories of popular
                products:
              </p>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
