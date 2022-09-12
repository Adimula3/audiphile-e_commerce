import React, {useEffect, useState} from "react";
import data from '../../data/data.json'

const CategoryPage = ({match}) => {

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        getCategory();
        window.scrollTo(0,0);
    }, [match.params.category])

    const getCategory = () => {

                const categoryList = data.filter(item => item.category === match.params.category).reverse();
                setCategoryItems(categoryList)


    }



    return (
      <div>
          <h1>ok ok ok </h1>
      </div>
  );
}
export default CategoryPage;
