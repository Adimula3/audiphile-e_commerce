import React from "react";
import Header from "../components/header";
import {Col, Container, Row} from "react-bootstrap";
import SpeakerZX7 from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import SpeakerZX7Tablet from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import SpeakerZX7Mobile from '../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import SpeakerZX9 from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import SpeakerZX9Tablet from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import SpeakerZX9Mobile from '../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import HeadPhones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import Speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import BestGear from "../assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import Footer from "../components/footer";


const Speakers = () => {
  return (
      <div className="speaker">
        <div className="speakers General-Head">
          <Header />
          <hr/>
            <h1 className="section-title">SPEAKERS</h1>
        </div>
          <div className="mark2">
              <Row>
                  <Col lg={6}>
                      <img src={SpeakerZX9} alt="" className="head-phones-mark2"/>
                      <img src={SpeakerZX9Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={SpeakerZX9Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
                  <Col lg={6}>
                      <Container>
                          <div className="General-products speaker-details">
                              <h4>NEW PRODUCT</h4>
                              <h2>ZX9
                                  SPEAKER</h2>
                              <p>Upgrade your sound system with the all new ZX9 active speaker.
                                  It’s a bookshelf speaker system that offers truly wireless connectivity
                                  -- creating new possibilities for more pleasing and practical audio setups.</p>
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
                          <div className="General-products speaker-details">
                              <h2>ZX7
                                  SPEAKER</h2>
                              <p>Stream high quality sound wirelessly with minimal loss.
                                  The ZX7 bookshelf speaker uses high-end audiophile
                                  components that represents the top of the line powered speakers for home or studio use.</p>
                              <button className="btn btn-primary">SEE PRODUCT</button>
                          </div>
                      </Container>
                  </Col>
                  <Col lg={6}>
                      <img src={SpeakerZX7} alt="" className="head-phones-mark2"/>
                      <img src={SpeakerZX7Tablet} alt="" className="head-phones-mark2-tablet"/>
                      <img src={SpeakerZX7Mobile} alt="" className="head-phones-mark2-mobile"/>
                  </Col>
              </Row>
          </div>
          <Container>
              <div className="breadcrumbs">
                  <div className="bread d-flex">
                      <div className="thumbnail">
                          <img src={HeadPhones} alt="" className="thumb-one speaker speak1"/>
                          <h2 className="product-name">HEADPHONES</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail" >
                          <img src={Speaker} alt="" className="thumb-two speaker speak2"/>
                          <h2 className="product-name">SPEAKERS</h2>
                          <h4 className="shop headphone">SHOP<img src={ArrowRight} alt=""  className="arrow-right"/></h4>
                      </div>
                      <div className="thumbnail">
                          <img src={EarPhone} alt="" className="thumb-three speaker speak3"/>
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
export default Speakers;
