import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse, FaExclamationTriangle } from "react-icons/fa";

function Expiring() {
    const navigate = useNavigate();

    const HomeNavigate = () => navigate('/home');
    const ProductNavigate = () => navigate('/products');
    const StockInNavigate = () => navigate('/stockin');
    const TransferNavigate = () => navigate('/transfers');
    const StockAuditNavigate = () => navigate('/audit');

    const products = [
        { name: 'Condom', price: 29.99, expiryDate: '2025-03-15' },
        { name: 'Face Mask', price: 19.99, expiryDate: '2025-03-25' },
        { name: 'Pills', price: 49.99, expiryDate: '2025-04-10' },
        { name: 'IUD', price: 39.99, expiryDate: '2025-05-05' },
        { name: 'Vitamins', price: 59.99, expiryDate: '2025-06-12' },
    ];

    
    const getFilteredProducts = () => {
        const today = new Date();
        const thirtyDaysFromNow = new Date(today);
        thirtyDaysFromNow.setDate(today.getDate() + 30);  

        return products.filter(product => {
            const expiryDate = new Date(product.expiryDate);
            return expiryDate >= today && expiryDate <= thirtyDaysFromNow;
        });
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="d-flex flex-column" style={{ height: '100vh',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',color: '#002d62'}}> 
                    
            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                <div className="container-fluid">
                <img src="/img/fpop-logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                </div>
            </nav>

            <div className="d-flex flex-grow-1 mt-5">

                <div className="col-lg-2 p-3 position-fixed" style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={HomeNavigate}>
                                <FaHome className="me-2" /> Dashboard
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={ProductNavigate}>
                                <FaWarehouse className="me-2 text-warning" /> View Products
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={StockInNavigate}>
                                <FaBoxOpen className="me-2 text-success" /> Add Product
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={TransferNavigate}>
                                <FaExchangeAlt className="me-2 text-primary" /> Stock Transfers
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={StockAuditNavigate}>
                                <FaClipboardCheck className="me-2" style={{ color: 'purple' }} /> Stock Audit
                            </button>
                        </li>
                        <li className="nav-item mt-auto mb-2">
                            <a href="/" className="nav-link btn btn-link text-start w-100 text-danger">
                                <FaPowerOff className="me-2" /> Log Out
                            </a>
                        </li>
                    </ul>
                </div>

                
                <main className="col-md-9 col-lg-10 ms-md-auto p-4" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', marginLeft: '16.6667%', backgroundColor: '#B3C8CF', minHeight: '85vh',  borderRadius: '12px', padding: '24px', color: '#333', transition: 'background-color 0.3s ease-in-out',gap: '100px'}}>
                    <div className="container py-4">

                        <div className="row justify-content-center g-4">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))
                            ) : (
                                <p>No products are expiring within the next 30 days.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <div className="col-md-3" >
            <div className="card text-center shadow-sm" style={{ backgroundColor: '#FFF2F2', border: '2px solid #002d62',borderRadius: '8px', position: 'relative' }}>
                <div className="card-body">
                    <h5 className="card-title text-primary">{product.name}</h5>
                    <p className="card-text text-dark">${product.price.toFixed(2)}</p>
                    <div className="alert alert-warning p-2">
                        <p className="mb-1"><strong>Expiry Date:</strong> {product.expiryDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expiring;
