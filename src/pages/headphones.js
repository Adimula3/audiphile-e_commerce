import React from "react";
import Header from "../components/header";
import HeadPhonesMark2 from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import HeadPhonesMark2Tablet from '../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import HeadPhonesMark2Mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import HeadPhonesMark1 from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import HeadPhonesMark1Tablet from '../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import HeadPhonesMark1Mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import HeadPhonesMark3 from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import HeadPhonesMark3Tablet from '../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import HeadPhonesMark3Mobile from '../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import {Col, Container, Row} from "react-bootstrap";
import HeadPhones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import Speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import BestGear from "../assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import Footer from "../components/footer";
const Headphones = () => {
  return (
      <div className="headphones">
        <div className="head-phones General-Head">
          <Header />
          <hr/>
            <h1 className="section-title">HEADPHONES</h1>
        </div>
          <div className="mark2">
              <Row>
                  <Col lg={6}>
                      <img src={HeadPhonesMark2} alt="" className="head-phones-mark2"/>
                      <img src={HeadPhonesMark2Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={HeadPhonesMark2Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
                  <Col lg={6}>
                      <Container>
                          <div className="General-products">
                              <h4>NEW PRODUCT</h4>
                              <h2>XX99 Mark II
                                  Headphones</h2>
                              <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
                                  headphone experience by reproducing the
                                  balanced depth and precision of studio-quality sound.</p>


                              <button className="btn btn-primary">SEE PRODUCT</button>
                          </div>
                      </Container>
                  </Col>
              </Row>
          </div>
          <div className="mark2">
              <Row className="middle">
                  <Col lg={6}>
                      <Container>
                          <div className="General-products">
                              <h2>XX99 Mark I
                                  Headphones</h2>
                              <p>As the gold standard for headphones, the classic XX99 Mark I offers
                                  detailed and accurate audio reproduction for
                                  audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                              <button className="btn btn-primary">SEE PRODUCT</button>
                          </div>
                      </Container>
                  </Col>
                  <Col lg={6}>
                      <img src={HeadPhonesMark1} alt="" className="head-phones-mark2"/>
                      <img src={HeadPhonesMark1Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={HeadPhonesMark1Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
              </Row>
          </div>
          <div className="mark2">
              <Row >
                  <Col lg={6}>
                      <img src={HeadPhonesMark3} alt="" className="head-phones-mark2"/>
                      <img src={HeadPhonesMark3Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={HeadPhonesMark3Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
                  <Col lg={6}>
                      <Container>
                          <div className="General-products">
                              <h2>XX59
                                  Headphones</h2>
                              <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                                  The stylish yet durable versatile wireless headset is a brilliant
                                  companion at home or on the move.</p>
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
                          <img src={HeadPhones} alt="" className="thumb-one head tail"/>
                          <h2 className="product-name">HEADPHONES</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail" >
                          <img src={Speaker} alt="" className="thumb-two head tail2"/>
                          <h2 className="product-name">SPEAKERS</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail">
                          <img src={EarPhone} alt="" className="thumb-three head tail3"/>
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
                      <img src={BestGearMobile} alt="" className="best-gear-mobile phone"/>

                  </Col>
              </Row>
          </div>
          <div className="bottom">
              <Footer />
          </div>
      </div>
  );
}
export default Headphones;
