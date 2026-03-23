import React, { useContext, useEffect , useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

function SearchBar() {
    let { searchBarRes, setSearchBarRes, setShowSearch, showSearch } = useContext(ShopContext);
    let [visible , setvisible] = useState(false);
    let location = useLocation();
//this will make sure we get searchbar only on collection page
    useEffect(()=>{
         if(location.pathname.includes('collection') ){
            setvisible(true);
         }else{
            setvisible(false)
         }
    },[location])
  return showSearch && visible ? (
    <div>
      <div className="border-t border-b shadow-sm w-full py-6 flex justify-center items-center">
        <div className="border border-gray-300 py-2 w-2/3 rounded-full flex justify-around sm:justify-between ">
          <input
            type="text"
            placeholder="Search"
            className="  outline-none px-4"
            onChange={(e)=>{
                setSearchBarRes(e.target.value);
                console.log(e.target.value);
            }}
          />
          <img src={assets.search_icon} alt="" className="w-5 h-5 mr-8 sm:mr-6" />
        </div>
        <img src={assets.cross_icon} onClick={()=>{setShowSearch(prev => !prev)}} className="w-3 h-3 ml-3" alt="" />
      </div>
    </div>
  ): null;
}

export default SearchBar