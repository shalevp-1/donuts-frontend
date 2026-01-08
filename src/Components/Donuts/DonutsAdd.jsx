import axios from "axios";
//import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Donuts.css';

const DonutsAdd = () => {
  const [donut, setDonut] = useState({
    name:"",
    flavor:"",
    price:null, 
    description:"",
    image:""
  })

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setDonut((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  console.log(donut);
  
  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/donuts", donut)
      alert("Donut was Created Successfully")
      navigate("/donutsv");
    }
    catch(err){
      alert("Donut couldnt be created")
      console.log(err);
      
    }
  }

  return (
    <div className='form'>
      <h1>Add A New Donut</h1>
      <input type="text" placeholder='Name' onChange={handleChange} name="name"/>
      <input type="text" placeholder='Flavor' onChange={handleChange} name="flavor"/>
      <input type="number" placeholder='Price' onChange={handleChange} name="price"/>
      <input type="text" placeholder='Description' onChange={handleChange} name="description"/>
      <input type="text" placeholder='Image Url' onChange={handleChange} name="image"/>

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default DonutsAdd