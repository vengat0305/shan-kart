import React from "react";
import "../services/services.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import ServicesData from "../assets/data/serviceData";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {ServicesData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="servicesItem"
                style={{ background: `${item.bg}` }}
              >
                <span className="serviceIcon">
                  {/* <i class="ri-truck-line"></i> */}
                  <i class={item.icon}></i>
                </span>
                <div className="servicesContent">
                  <h3>{item.title} </h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
