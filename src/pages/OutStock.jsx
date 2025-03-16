import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";

function OutStock() {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);
        
    const toggleSidebar = () => setShowSidebar(!showSidebar);
        
    const handleLogout = () => {
        navigate('/'); 
      };

    const HomeNavigate = () => navigate('/home');
    const ProductNavigate = () => navigate('/products');
    const StockInNavigate = () => navigate('/stockin');
    const TransferNavigate = () => navigate('/transfers');
    const StockAuditNavigate = () => navigate('/audit');

    const products = [
        { name: 'Condom', price: 29.99, isOutOfStock: true, stockOutDate: '2025-02-15', stockOutReason: 'Supplier delay' },
        { name: 'Face Mask', price: 19.99, isOutOfStock: true, stockOutDate: '2025-02-10', stockOutReason: 'High demand' },
        { name: 'Pills', price: 49.99, isOutOfStock: true, stockOutDate: '2025-01-20', stockOutReason: 'High demand' },
        { name: 'IUD', price: 39.99, isOutOfStock: true, stockOutDate: '2025-01-24', stockOutReason: 'Transferred' },
    ];

    const handleRestock = () => {
        alert('You will be notified once the product is restocked!');
    };

    return (
        <div className="d-flex flex-column" style={{ height: '100vh',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
            color: '#002d62'}}> 

            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                 <div className="container-fluid d-flex justify-content-between align-items-center">
                     <img src="/img/fpop-logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                     <FaUserCircle size={40} color="#000" style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
                </div>
            </nav>
             <div className={`position-fixed end-0 h-100  shadow ${showSidebar ? 'translate-x-0' : 'translate-x-100'}`}
                                  style={{
                                    backgroundColor: '#E0F2F7',
                                    top: '69px', 
                                    width: '250px',
                                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                                    zIndex: 1050,
                                    borderLeft: '2px solid #ddd',
                                    display: showSidebar ? 'block' : 'none', 
                                    opacity: showSidebar ? 1 : 0,  
                                  }}>
                              <div className="p-2">
                              
                                <div className="d-flex justify-content-end">
                                  <FaTimes size={24} style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
                                </div>
                        
                                
                                <h5 className="mt-2 mb-3">Natalie Jenh Alarcon</h5>
                                <ul className="list-group" style={{backgroundColor: '#E0F2F7'}}>
                                  <li className="list-group-item" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                                    View Profile
                                  </li>
                                  <li className="list-group-item" onClick={() => navigate('/edit-profile')} style={{ cursor: 'pointer' }}>
                                    Edit Profile
                                  </li>
                                  <li className="list-group-item" onClick={() => navigate('/help')} style={{ cursor: 'pointer' }}>
                                    Help
                                  </li>
                                  <li className="list-group-item" onClick={() => navigate('/data-privacy')} style={{ cursor: 'pointer' }}>
                                    Data and Privacy
                                  </li>
                                  <li className="list-group-item text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                    Logout
                                  </li>
                                </ul>
                              </div>
                     </div>
            

            <div className="d-flex flex-grow-1 mt-5">
               
                <div className="col-lg-2 p-3 position-fixed" style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={HomeNavigate}><FaHome className="me-2" /> Dashboard</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={ProductNavigate}><FaWarehouse className="me-2 text-warning" /> View Products</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={StockInNavigate}><FaBoxOpen className="me-2 text-success" /> Add Product</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={TransferNavigate}><FaExchangeAlt className="me-2 text-primary" /> Stock Transfers</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={StockAuditNavigate}><FaClipboardCheck className="me-2" style={{ color: 'purple' }} /> Stock Audit</button></li>
                        <li className="nav-item mt-auto mb-2"><a href="/" className="nav-link btn btn-link text-start w-100 text-danger"><FaPowerOff className="me-2" /> Log Out</a></li>
                    </ul>
                </div>

              
                <main className="col-md-9 col-lg-10 ms-md-auto  p-4"
                    style={{
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                        marginLeft: '16.6667%',
                        backgroundColor: '#B3C8CF',
                        minHeight: '80vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        fontFamily: 'Poppins, sans-serif'
                    }}>
                    
                    <div className="container py-3">
                        <div className="row justify-content-center g-4">
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} onRestock={handleRestock} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function ProductCard({ product, onRestock }) {
    const [isRestocked, setIsRestocked] = useState(false);

    const requestRestock = () => {
        setIsRestocked(true);
        onRestock();
    };

    return (
        <div className="col-md-3">
            <div className="card text-center  shadow-sm" style={{ backgroundColor: '#FFF2F2', border: '2px solid #002d62',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
                <div className="card-body">
                    <h5 className={`card-title ${product.isOutOfStock ? 'text-decoration-line-through text-primary' : ''}`}>
                        {product.name}
                    </h5>
                    <p className={`card-text ${product.isOutOfStock ? 'text-danger' : 'text-dark'}`}>
                        {product.isOutOfStock ? 'Out of Stock' : `$${product.price.toFixed(2)}`}
                    </p>

                    <button
                        className={`btn w-100 mb-2 ${product.isOutOfStock ? 'btn-secondary disabled' : 'btn-danger'}`}
                        disabled={product.isOutOfStock}>
                        {product.isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>

                    {product.isOutOfStock && !isRestocked && (
                        <>
                            <button className="btn btn-success w-100 mb-2" onClick={requestRestock}>
                                Request Restock
                            </button>
                            <div className="alert alert-warning p-2">
                                <p className="mb-1"><strong>Out of Stock Since:</strong> {product.stockOutDate}</p>
                                <p className="mb-0"><strong>Reason:</strong> {product.stockOutReason}</p>
                            </div>
                        </>
                    )}

                    {isRestocked && (
                        <div className="alert alert-success p-2 fw-bold">
                            Restock Request Sent!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OutStock;
