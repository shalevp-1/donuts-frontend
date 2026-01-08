import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Donuts.css';

const DonutsUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const donutId = location.pathname.split("/")[2];

  const [donut, setDonut] = useState({
    name: "",
    flavor: "",
    price: "",
    description: "",
    image: ""
  });

 
  useEffect(() => {
    const fetchDonut = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/donut/${donutId}`);
        setDonut(res.data[0]); 
      } catch (err) {
        console.log("Error fetching donut data:", err);
      }
    };

    fetchDonut();
  }, [donutId]);

  const handleChange = (e) => {
    setDonut((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/donuts/${donutId}`, donut);
      alert("Donut has been updated successfully");
      navigate("/donutsv");
    } catch (err) {
      alert("Error updating donuts data");
      console.log("Error updating donut:", err);
    }
  };

  return (
    <div className='form'>
      <h1>Update The Donut</h1>
      <input
        type="text"
        placeholder='Name'
        value={donut.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder='Flavor'
        value={donut.flavor}
        onChange={handleChange}
        name="flavor"
      />
      <input
        type="number"
        placeholder='Price'
        value={donut.price}
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder='Description'
        value={donut.description}
        onChange={handleChange}
        name="description"
      />
      <input
        type="text"
        placeholder='Image Url'
        value={donut.image}
        onChange={handleChange}
        name="image"
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default DonutsUpdate;
