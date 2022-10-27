import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import BestGear from "../../assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";

const ProductDetails = () => {
  return (
      <div className="product-details">
          <Container>
              <Row>
                  <Col lg={6}>
                      <h2>Bringing you the <i>best</i> audio gear</h2>
                      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                          available for you to browse and experience a wide range of our products. Stop by our store to meet some of the
                          fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                  </Col>
                  <Col lg={6}>
                      <img src={BestGear} alt="" className="best-gear"/>
                      <img src={BestGearTablet} alt="" className="best-gear-tablet"/>
                      <img src={BestGearMobile} alt="" className="best-gear-mobile"/>

                  </Col>
              </Row>
          </Container>

      </div>
  );
}
export default ProductDetails;
