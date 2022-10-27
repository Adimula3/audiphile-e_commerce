import React from "react";
import {Container} from "react-bootstrap";
import HeadPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import ArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Shop = () => {
  return (

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
  );
}
export default Shop;
