import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LandingPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        navigate('/home');
    };

    return (
        <div className="d-flex align-items-center justify-content-center text-center"
             style={{
                 width: '100vw',
                 height: '100vh',
                 backgroundColor: '#E0F2F7',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundAttachment: 'fixed',
                 margin: 0,
                 padding: 0,
                 fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
                 color: '#002d62'  
             }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    
                    <div className="col-md-5 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center">
                        <img src="/img/fpop-logo.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
                        <h1 className="mt-1  text-center" >
                            Inventory Management System
                        </h1>
                        <p className="text-center" >
                            Effortlessly manage resources with transparency and efficiency.<br />
                            Together, let's ensure every supply supports quality care and services!
                        </p>
                    </div>

                   
                    <div className="col-md-5">
                        <div className="p-4 rounded-4 shadow-lg w-100"
                             style={{ 
                                 background: 'rgba(255, 255, 255, 0.1)', 
                                 backdropFilter: 'blur(10px)', 
                                 border: '2px solid rgba(255, 255, 255, 0.3)' ,
                             }}>
                            <h2 className="mb-2" >WELCOME</h2>
                            <p className="mb-4" >LOG IN TO CONTINUE</p>

                            <form onSubmit={handleSubmit}>
                                
                                <input 
                                    type="email" 
                                    className="form-control mb-3"
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#002d62', border: '2px solid #002d62' }}
                                />

                                
                                <div className="position-relative mb-3">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        className="form-control"
                                        placeholder="Password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#002d62', border: '2px solid #002d62' }}
                                    />
                                    <span 
                                        className="position-absolute end-0 top-50 translate-middle-y pe-3"
                                        style={{ cursor: 'pointer', color: '#002d62' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                               
                                <button 
                                    type="submit" 
                                    className="btn w-100 text-white mb-2"
                                    style={{ backgroundColor: '#002d62' }}>LOGIN</button>

                              
                                <p className="mt-3" 
                                    style={{ fontSize: '0.8em', color: '#002d62', cursor: 'pointer', textDecoration: 'underline' }}>Forgot Password?
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
