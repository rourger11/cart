import React from "react";
import phone from "../images/apple.jpg";
import image from "../images/samsung.jpg";
import image1 from "../images/oneplus.jpg";

import "./Home.css";
import { useDispatch,useSelector} from "react-redux";
import {addToCart} from '../actions/index.jsx'
import Navigation from "../Navigation/Navigation";

export default function Home() {
  const myState = useSelector((state)=>state.changeNum)
  const dispatch= useDispatch()
  


  return (
    <>
    <Navigation items={myState}/>

      <div className="products d-flex">

        <div className="items">
          <img src={phone} alt="iphone" className="i_phone" id="iphone" />
          <br />
          <span>Item:I-phone20</span>
          <br />
          <span>Price:$1000</span>
          <br />

          <button onClick={()=>dispatch (addToCart())}> Add to cart </button>
        </div>

        <div className="items">
          <img src={image} alt="iphone" className="i_phone" />
          <br />
          <span>Item:Samsung II</span>
          <br />
          <span>Price:$999</span>
          <br />
          <button onClick={()=>dispatch (addToCart())}>Add to cart</button>
        </div>
        <div className="items">
          <img src={image1} alt="iphone" className="i_phone" id="one" />
          <br />
          <span>Item:One-Plus</span>
          <br />
          <span>Price:$900</span>
          <br />
          <button onClick={()=>dispatch (addToCart())}>Add to cart</button>

        </div>

      </div>
    </>
  );
}
