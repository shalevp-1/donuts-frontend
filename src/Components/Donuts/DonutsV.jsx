//import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Donuts.css';

const DonutsV = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [donuts, setDonuts] = useState([]);
  const navigate = useNavigate(); 

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8800/donutsv')
      .then(res => {
        if (res.data.status === "Success") {
          setAuth(true);
          setName(res.data.name);
          //navigate('/login'); 
        } else {
          setAuth(false);
          setMessage(res.data.error);
        }
      })
      .catch(error => console.log(error)); 
  }, [navigate]);

  useEffect(() => {
    const fetchAllDonuts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/donuts");
        setDonuts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllDonuts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/donuts/${id}`);
      setDonuts(donuts.filter(donut => donut.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteCookie = () => {
    axios.get("http://localhost:8800/logout")
    .then(res=>{
      navigate('/login');
    }).catch(err => console.log(err))
  };

  return (
    <div>
      {
        auth ? 
          <div>
            <h1>Hello {name}!</h1>
            <h2>Donuts Bakery</h2>
            <button class='logout' onClick={handleDeleteCookie}>LogOut</button>
            <button className='new'><Link to="/donutsadd">Add new Donut</Link></button>
            <div className="donuts">
              {donuts.map(donut => (
                <div className="donut" key={donut.id}>
                  {donut.image && <img src={donut.image} alt="" />}
                  <h2>{donut.flavor}</h2>
                  <p>{donut.description}</p>
                  <span>{donut.price}</span>
                  <button className="delete" onClick={() => handleDelete(donut.id)}>Delete</button>
                  <button className="update"><Link to={`/donutsupdate/${donut.id}`}>Update</Link></button>
                </div>
              ))}
            </div>
            
          </div>
         : (
          <div><h2>Not Authorised</h2>
          <h3>{message}</h3>
          
          <h2>Login Now</h2>
          <Link to="/login">Login</Link>
          
          </div>
          
        )
      }
    </div>
  )
};

export default DonutsV;
