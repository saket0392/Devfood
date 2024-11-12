import React, { useState } from 'react';
import { useContext, useReducer } from "react";

export default function Card(props) {
  let dispatch = usedispatchcart();
  let options = props.options
  let priceoptions = Object.keys(options)
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  const handleaddtocart = async () =>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.name})
  }
  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
        <img className="card-img-top" src={props.foodItem.img} alt="Card image cap"  style={{height:"150px" , objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodname}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceoptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline fs-5 h-100">Total price</div>
            <hr></hr>
            <button className="btn btn-success justify-center ms-2" >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
