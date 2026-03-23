import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';
import Title from './Title';

function RelatedProduct({category , subcategory}) {
    let [related , setrelated] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
      let productCopy = products.slice(); //copy all products
      if (products.length > 0) {
        productCopy = productCopy.filter((item) => category === item.category);
        productCopy = productCopy.filter(
          (item) => subcategory === item.subCategory,
        );
         setrelated(productCopy);
      }
     
    }, [products, category, subcategory]);
  return (
    <div className="my-24">
      <div>
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cos-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {related.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct