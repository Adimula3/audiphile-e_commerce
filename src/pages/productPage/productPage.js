import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import '../productPage/productPage.css';
import HeadPhones2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import {Col, Container, Row} from "react-bootstrap";


const ProductPage = ({match}) => {

    const [productData, setProductData] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);


    useEffect(() => {
        getData();
        window.scrollTo(0,0)
    })

    const getData = () => {
        fetch(process.env.PUBLIC_URL + "../../data/data.json")
            .then(response=>response)
            .then(response=>response.json())
            .then(data => {
                const product = data.filter(item => item.slug === match.params.product);
                setProductData(product)
                console.log(product)
            })
    }

      const increaseValue = () => {
        setProductQuantity((prevState) => prevState + 1);
        console.log(productQuantity)
      }
      const decreaseValue = () => {
        setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1: 0))
      }

      const displayProduct = productData.map(product => <div className="" key={product.id}>
          <h2>{product.name}</h2>
      </div> )
    return (
      <div className="product-page">
          <div className="productPage">
              <Header />
          </div>
          <Container>
              <h6>Go Back</h6>
              <Row>
                  <Col lg={6}>
                      <img src={HeadPhones2} alt="" className="head-phones2"/>
                  </Col>
                  <Col lg={6}>
                      <div className="productPage-details">
                          <h4>NEW PRODUCT</h4>
                          {displayProduct}
                          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
                              headphone experience by reproducing the
                              balanced depth and precision of studio-quality sound.</p>
                          <h5 className="price">$ 2,999</h5>
                          <div className="d-flex">
                              <div className="item-count d-flex">
                                  <span className="quantity add" onClick={increaseValue}>+</span>
                                  <span className="qty">{productQuantity}</span>
                                  <span className="quantity minus" onClick={decreaseValue}>-</span>
                              </div>
                              <button className="btn btn-primary">ADD TO CART</button>
                          </div>

                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}
export default ProductPage;
