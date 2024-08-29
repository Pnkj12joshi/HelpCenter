import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='searchbox'>
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <FaArrowRight style={{marginTop:"-20px",cursor: "pointer"}} onClick={console.log("hii")}/>
    </div>
   
  );
};
export default SearchBar;