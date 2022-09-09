import React from "react";
import '../style/style.css'
import Header from "../components/header";
import {Col, Container, Row} from "react-bootstrap";
import HeadPhones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import EarPhone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import ArrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import PatternCircle from '../assets/home/desktop/pattern-circles.svg'
import SpeakerZX9 from '../assets/home/desktop/image-speaker-zx9.png';
import EarPhonesYX1 from '../assets/home/desktop/image-earphones-yx1.jpg';
import BestGear from '../assets/shared/desktop/image-best-gear.jpg';
import EarPhonesYX1Tablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import BestGearTablet from '../assets/shared/tablet/image-best-gear.jpg'
import BestGearMobile from '../assets/shared/mobile/image-best-gear.jpg'
import Footer from "../components/footer";
const Home = () => {
  return (
      <div className="home">
          <div className="hero">
              <Header />
              <hr/>
              <div className="hero-left">
                  <Container>
                      <h4>NEW PRODUCT</h4>
                      <h2>XX99 Mark II
                          Headphones</h2>
                      <p>Experience natural, lifelike audio and exceptional
                          build quality made for the passionate music
                          enthusiast.</p>
                      <button className="btn btn-primary">SEE PRODUCT</button>
                  </Container>
              </div>
          </div>
          <Container>
              <div className="breadcrumbs">
                          <div className="bread d-flex">
                              <div className="thumbnail">
                                  <img src={HeadPhones} alt="" className="thumb-one"/>
                                  <h2 className="product-name">HEADPHONES</h2>
                                  <h4 className="shop">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                              </div>
                              <div className="thumbnail" >
                                  <img src={Speaker} alt="" className="thumb-two"/>
                                  <h2 className="product-name">SPEAKERS</h2>
                                  <h4 className="shop">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                              </div>
                              <div className="thumbnail">
                                  <img src={EarPhone} alt="" className="thumb-three"/>
                                  <h2 className="product-name">EARPHONES</h2>
                                  <h4 className="shop">SHOP<img src={ArrowRight} className="arrow-right" alt=""/></h4>
                              </div>
                          </div>

              </div>
          </Container>
          <div className="products">
              <Container>
                  <div className="speaker-product">
                      <img src={PatternCircle} alt="" className="pattern-circle"/>
                      <img src={SpeakerZX9} alt="" className="speaker-zx7"/>
                      <div className="speaker-info">
                          <h2 className="speaker-ZX7">ZX9
                              SPEAKER</h2>
                          <p className="speakerZX7-text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                          <button className="btn btn-primary">SEE PRODUCT</button>
                      </div>
                  </div>
                  <div className="speaker-product2">
                      <div className="speaker-info2">
                          <h2>ZX7 SPEAKER</h2>
                          <button className="btn btn-primary">SEE PRODUCT</button>
                      </div>
                  </div>
                  <div className="speaker-product3">
                      <div className="speaker-info3 d-flex">
                          <img src={EarPhonesYX1} alt="" className="ear-phone-desktop"/>
                          <img src={EarPhonesYX1Tablet} alt="" className="ear-phone-tablet"/>
                          <div className="earphones-info">
                              <h2>YX1 EARPHONES</h2>
                              <button className="btn btn-primary">SEE PRODUCT</button>
                          </div>
                      </div>
                  </div>
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
              </Container>
              <div className="bottom">
                  <Footer />
              </div>
          </div>
      </div>
  );
}
export default Home;
