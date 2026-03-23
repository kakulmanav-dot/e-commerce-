import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';
import { ShopContext } from '../context/ShopContext';

function Collection() {

  const { products, searchBarRes, setSearchBarRes, setShowSearch, showSearch } =
    useContext(ShopContext);

  let [showfilter , setshowfilter] = useState(false);
  let [showProduct , setshowProduct] = useState([]);
  let [category , setcategory] = useState([]);
  let [subcategory , setsubcategory] = useState([]);
   let [sortType , setSortType] = useState("relevant")


  function toggle (e){
    if(category.includes(e.target.value)){
        setcategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setcategory(prev => [...prev,e.target.value]);
    }
   
  }
  function Subtoggle(e) {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
      
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  }
  function applyFilters (){
    let productsCopy = products.slice();
  
      if(searchBarRes && showSearch){
          productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(searchBarRes.toLowerCase()))
      }
    if(category.length >0){
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subcategory),
      );
    }
    setshowProduct(productsCopy);
  }
  const sortProduct = () =>{
    const fpCopy = showProduct.slice();
    switch (sortType){
      case "low-high": 
      setshowProduct(fpCopy.sort((a,b) =>(a.price - b.price)));
      break;
      case 'high-low':
        setshowProduct(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      
        default:
          applyFilters();
          break;
    }
  }
  useEffect(() => {
    applyFilters();
  }, [category, subcategory, searchBarRes ,products]);
  
  useEffect(()=>{
     sortProduct(); 
  },[sortType])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60  ">
        <div className="flex gap-2 items-center">
          <p>Filters</p>
          <img
            onClick={() => {
              setshowfilter((prev) => !prev);
            }}
            src={assets.dropdown_icon}
            className={`sm:hidden w-3 h-3 object-cover ${showfilter ? "rotate-90" : "rotate-0"}`}
            alt=""
          />
        </div>

        {/* catergory */}
        <div
          className={`border border-gray-500 py-3 pl-5 mt-6  w-2/5 sm:w-full sm:block ${showfilter ? "block" : "hidden"}`}
        >
          <p>Categories</p>
          <div className="mt-3 ">
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                onChange={toggle}
                className=""
                value={"Men"}
              />
              Men
            </p>
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                className=""
                onChange={toggle}
                value={"Women"}
              />
              Women
            </p>{" "}
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                className=""
                onChange={toggle}
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subcategories filter */}
        <div
          className={`border border-gray-500 py-3 pl-5 mt-6 w-2/5 sm:w-full  sm:block ${showfilter ? "" : "hidden"}`}
        >
          <p>Type</p>
          <div className="mt-3 ">
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                className=""
                onChange={Subtoggle}
                value={"TopWear"}
              />
              TopWear
            </p>
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                className=""
                value={"BottomWear"}
                onChange={Subtoggle}
              />
              BottomWear
            </p>{" "}
            <p className=" text-gray-500 flex gap-2">
              <input
                type="checkbox"
                className=""
                value={"InnerWear"}
                onChange={Subtoggle}
              />
              InnerWear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full">
        <div className="-mt-12 flex justify-between items-center">
          <Title text1={"All"} text2="Collection" />
          <select
            onChange={(e) => {
              setSortType(e.target.value);
            }}
            className="border border-gray-600 text-sm mt-10 py-2 px-2 outline-none"
            name=""
            id=""
          >
            <option value="relevant">Sort By: Relevent</option>
            <option value="high-low">Sort By: High To Low</option>
            <option value="low-high">Sort By: Low To High</option>
          </select>
        </div>

        {/* Map Product */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
          {showProduct.map((item, index) => (
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
    </div>
  );
}

export default Collection