import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="text-center my-3">
                                <button type="submit" className="btn btn-dark">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center my-3">
                            <p>Don't have an account? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
