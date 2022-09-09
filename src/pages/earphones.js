import React from "react";
import Header from "../components/header";
import {Col, Container, Row} from "react-bootstrap";
import EarphonesYX1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import EarphonesYX1Tablet from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg';
import EarphonesYX1Mobile from '../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import HeadPhones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import Speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import BestGear from "../assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import Footer from "../components/footer";

const Earphones = () => {
  return (
      <div className="earphones">
          <div className="ear-phones General-Head">
              <Header />
              <hr/>
              <h1 className="section-title">EARPHONES</h1>
          </div>
          <div className="mark2">
              <Row>
                  <Col lg={6}>
                      <img src={EarphonesYX1} alt="" className="head-phones-mark2"/>
                      <img src={EarphonesYX1Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={EarphonesYX1Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
                  <Col lg={6}>
                      <Container>
                          <div className="General-products">
                              <h4>NEW PRODUCT</h4>
                              <h2>YX1 WIRELESS
                                  EARPHONES</h2>
                              <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                                  Enjoy incredible high-fidelity sound even in noisy environments
                                  with its active noise cancellation feature.</p>
                              <button className="btn btn-primary">SEE PRODUCT</button>
                          </div>
                      </Container>
                  </Col>
              </Row>
          </div>
          <Container>
              <div className="breadcrumbs">
                  <div className="bread d-flex">
                      <div className="thumbnail">
                          <img src={HeadPhones} alt="" className="thumb-one earphone listen1"/>
                          <h2 className="product-name">HEADPHONES</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail" >
                          <img src={Speaker} alt="" className="thumb-two earphone listen2"/>
                          <h2 className="product-name">SPEAKERS</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail">
                          <img src={EarPhone} alt="" className="thumb-three earphone listen3"/>
                          <h2 className="product-name">EARPHONES</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} className="arrow-right" alt=""/></h4>
                      </div>
                  </div>

              </div>
          </Container>
          <div className="product-details">
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
          </div>
          <div className="bottom">
              <Footer />
          </div>
      </div>
  );
}
export default Earphones;
