import React from "react";
import "./Nav.css"

function Nav(props) {
  const handleChange = (e) => {
    console.log(e.target.value);

    let filter = props.products.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    props.setFilteredProducts(filter);
    
  };
  

  return (
    <div>
      
      
      <input type="text" onChange={handleChange} className="search"></input>
    </div>
  );
}

export default Nav;
