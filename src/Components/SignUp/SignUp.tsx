import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordcheck: ''
    });

    const navigate = useNavigate();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = () => {
        if (!formData.username || !formData.email) {
            window.alert('Username and email cannot be empty.');
            return false; 
        }

        if (!isValidEmail(formData.email)) {
            window.alert('Please enter a valid email address.');
            return false;
        }

        if (formData.password !== formData.passwordcheck) {
            window.alert('Passwords do not match. Please enter matching passwords.');
            return false;
        }

        if (formData.password === '') {
            window.alert('Please enter a valid password.');
            return false;
        }
        
        window.alert('You\'ve signed up!');
        return true; 
    };
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (handleSignUp()) {
            axios.post('http://localhost:8800/register', formData)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login');
                } else {
                    alert("Error");
                }
            })
            .catch(error => console.log(error));
        }
    };

    return (
        <div className='SignUp'>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" id='userName' placeholder='UserName' onChange={e => setFormData({...formData, username: e.target.value})} />
                    <input type="text" id='email' placeholder='Email'  onChange={e => setFormData({...formData, email: e.target.value})}/>
                    <input type="password" id='password' placeholder='Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <input type="password" id='passwordcheck' placeholder='Repeat Password' value={formData.passwordcheck} onChange={(e) => setFormData({ ...formData, passwordcheck: e.target.value })} />
                    <input type="submit" value="Sign Up" />
                </form>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}
