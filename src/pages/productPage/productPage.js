import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import '../productPage/productPage.css';
import HeadPhones2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import data from '../../data/data'
import Shop from "../shop/shop";
import ProductDetails from "../productDetails/productDetails";
import Footer from "../../components/footer";
import g1 from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import g2 from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import g3 from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';


const ProductPage = () => {

    const [productData, setProductData] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);

    const {product} = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0,0)
    },[product])

    const getData = () => {
        const productList = data.filter(item => item.slug === product);
        setProductData(productList)
        console.log(productList)
    }

    const increaseValue = () => {
        setProductQuantity((prevState) => prevState + 1);
        console.log(productQuantity)
    }
    const decreaseValue = () => {
        setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1: 0))
    }

    const displayProduct = productData.map(item =>
        <Container>
            <div className="" key={item.id}>
                <Link to={`/${item.category}`} className="back-to"> Go Back</Link>
                <Row>
                    <Col lg={6}>
                        <img src={item.image.desktop} alt={item.name} className="head-phones2"/>
                    </Col>
                    <Col lg={6}>
                        <div className="productPage-details">
                            {item.new && <h4>NEW PRODUCT</h4> }
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <h5 className="price">${item.price}</h5>
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
                <Row className="productPage-features">
                    <Col lg={7}>
                        <div className="product-features">
                            <h2>FEATURES</h2>
                            <p>{item.features}</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="product-content">
                            <h2>IN THE BOX</h2>
                            <div className="">
                                {item.includes.map((item,index) => <div key={index}>
                                    <p><span>{item.quantity}x</span>{item.item}</p>
                                </div>)}
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="galleries d-flex">
                    <div className="">
                        <img src={item.gallery.first.desktop} alt="" className="left-gallery"/>
                        <img src={item.gallery.second.desktop} alt="" className="left-gallery"/>
                    </div>
                    <div className="">
                        <img src={item.gallery.third.desktop} alt="" className="right-gallery"/>
                    </div>
                </div>
                <div className="product-container">
                    <h3>YOU MAY ALSO LIKE</h3>
                    <div className="other-products d-flex justify-content-center">
                        {item.others.map((item, index) => <div className="" key={index}>

                            <div className="other d-flex">
                                <img src={item.image.desktop} alt="" className="other-image"/>
                            </div>
                            <h3>{item.name}</h3>

                            <Link  to={`/${item.category}/${item.slug}`}><button className="btn btn-primary see">SEE PRODUCT</button></Link>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </Container>
        )
    return (
        <div>
            <div className="product-page">
                <div className="productPage">
                    <Header />
                </div>
                {displayProduct}
            </div>
            <Shop />
            <ProductDetails />
            <div className="bottom">
                <Footer />
            </div>

        </div>
  );
}
export default ProductPage;
