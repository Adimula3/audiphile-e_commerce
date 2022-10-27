import React, {useEffect, useState} from "react";
import data from '../../data/data'
import {Link, useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductDetails from "../productDetails/productDetails";
import Shop from "../shop/shop";


const CategoryPage = () => {

    const [categoryItems, setCategoryItems] = useState([]);

    const {category} = useParams();

    useEffect(() => {
        getCategory();
        window.scrollTo(0,0);
    }, [category])

    const getCategory = () => {

        const categoryList = data.filter(item => item.category === category).reverse();

        setCategoryItems(categoryList)

        console.log(categoryList);

    }
    const itemList = categoryItems.map(item =>
        <section className="product" key={item.id}>
            <div className="mark2">
                <Row className="mark2-row">
                    <Col lg={6}>
                        <img src={item.image.desktop} alt={item.name} className="head-phones-mark2"/>
                        <img src={item.image.tablet} alt={item.name} className="head-phones-mark2-tablet"/>
                        <img src={item.image.mobile} alt={item.name} className="head-phones-mark2-mobile" />
                    </Col>
                    <Col lg={6}>
                        <Container>
                            <div className="General-products">
                                {item.new && <h4>NEW PRODUCT</h4>}
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>


                                <Link  to={`/${item.category}/${item.slug}`}><button className="btn btn-primary">SEE PRODUCT</button></Link>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
        </section>
    )

    return (
        <div>
            <div className="head-phones General-Head">
                <Header />
                <hr/>
                <h1 className="section-title">{category}</h1>
            </div>
            {itemList}
            <Shop />
            <ProductDetails />
            <div className="bottom">
                <Footer />
            </div>
        </div>
    );
}
export default CategoryPage;
