import React from 'react';
import './Head.css';
import Array from './Array.js';
import Array1 from './Array1.js';
import Array2 from './Array2.js';
import { useState } from 'react';
// import Cartpage from './Cartpage.js';

const data = Array;
const data1 = Array1;
const data2 = Array2;


function Products({setData}) {
  const [cart,setCart] = useState([]);


  function add(val)
  {
    setCart([...cart,val])
    setData([...cart,val])


  }

    return (
    <div className="Products">
      <div className="sunglasses">  
      {/* <h1>{cart.length}</h1> */}
      <h2>Stunning Sunglasses to make a Trend</h2>
      <h6>Buy 1 Get 1 | Including Lenses | Use Code: SPECA50</h6>
      <div className="cards">
         {
         data.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price} Onwards</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>

      <div className="Computerglasses">  
      <h2>Bluezero Computer Glasses starting at ₹2490</h2>
      <h6>Buy 1 Get 1 | Flat 50% Off | Use Code: SPECA50</h6>
      <div className="cards">
         {
         data1.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price}</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>

      <div className="gamingwear">  
      <h2>SPECARTS - Gamer's Choice</h2>
      <h6>Buy 1 Get 1 | Gaming Eyewear</h6>
      <div className="cards">
         {
         data2.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price}</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>
    </div>
    
    );
  }
  
  export default Products;