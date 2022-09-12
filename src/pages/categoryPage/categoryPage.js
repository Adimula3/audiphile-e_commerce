import React, {useEffect, useState} from "react";
import data from '../../data/data.json'

const CategoryPage = () => {

    const [categoryItems, setCategoryItems] = useState([]);

    const testFetch = async () => {
        try{
            console.log(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       if(isMounted) {
           testFetch().then()
       }
    }, []);



    return (
      <div>
          <h1>ok ok ok </h1>
      </div>
  );
}
export default CategoryPage;
