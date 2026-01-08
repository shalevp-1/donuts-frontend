import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''     
    });
   
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        axios.post('http://localhost:8800/login', formData)
        .then(res => {
            if(res.data.status === "Logged in successfully") {
                navigate('/donutsv');
            }
            else {
                alert(res.data.error);
            }
        })
        .then(error => console.log(error));
    };

    // const handleLogin= () => {
       
    //     window.alert('You\'ve Logged In!');
    // };

    return (
        <div className='Login'>
            <div className="form">
                <form onSubmit={handleSubmit}>
                <input type="text" id='username' placeholder='UserName' onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
                <input type="password" id='password' placeholder='Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <input type="submit" value="Login"/>
                </form>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}