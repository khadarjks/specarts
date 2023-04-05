import { useState, useEffect } from 'react';
import './Head.css';


function Cartpage({get,setGet}) {

  const [price,setPrice] = useState([]);
  const [incre,setIncre] = useState(1);
  

  const remove = (id) =>
  {
    const ar = get.filter((get)=>get.id!==id);
    setGet(ar);
  }
  

  useEffect
    (()=>{
      let amt = 0;
      get.map((val)=> (amt+=incre*val.price));
      setPrice(amt);
    },[get,incre]);
    console.log(incre)
    
    // const upd = () ={
    //   setIncre(incre + 1);
    // }
   


    // console.log(price);

    return (
      <div className="cartpg">
<div className="cartpage">
            {
         get.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="20%"/>
        <h6>{val.name}</h6>
        <h5>₹ {incre*val.price}</h5>
        <h6>Quantity: {incre}</h6>
        <div className="inc">
        <button onClick={()=>setIncre(incre-1)}>-</button>
        <button onClick={()=>setIncre(incre+1)}>+</button>
        </div>
        <button onClick={()=>remove(val.id)}>Remove</button>
        </div>
        )
      }
    </div>
      <h1>Total Amount:{price}</h1>
    </div>

    );
  }
  
  export default Cartpage;