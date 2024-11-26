import React, { useState } from "react";
import { login } from '../src/api';

const Login = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data } = await login(credentials);
            localStorage.setItem('token', data.access);
            alert('Logged In!');
        } catch (error) {
            alert('Login failed!');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;