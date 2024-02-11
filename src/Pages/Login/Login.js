import React from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        Navigate("/profile")
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <button></button>
            </form>
        </div>
    );
}

export default Login;
