import React, {useEffect, useState} from "react";
import data from '../../data/data'
import {useParams} from "react-router-dom";

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

    return (
        <div>
            <h1>ok ok ok </h1>
        </div>
    );
}
export default CategoryPage;
