import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';  

function Request() {
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

    const [showModal, setShowModal] = useState(false);
    const [currentRequest, setCurrentRequest] = useState(null);

    const handleShow = (request) => {
        setCurrentRequest(request);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentRequest(null);
    };

    const requestData = [
        { type: 'Restock Request', description: 'Request to refill low or out-of-stock items.', quantity: 50, requestedBy: 'John Doe' },
        { type: 'Transfer Request', description: 'Request to move stock from one location to another.', quantity: 30, requestedBy: 'Jane Smith' },
        { type: 'New Product Request', description: 'Request to add a new product to the inventory.', quantity: 10, requestedBy: 'Alice Brown' },
        { type: 'Return Request', description: 'Request to return damaged or expired stock.', quantity: 20, requestedBy: 'Bob White' },
        { type: 'Adjustment Request', description: 'Request to adjust stock levels due to miscounts or spoilage.', quantity: 5, requestedBy: 'Charlie Green' },
    ];

    const requestCounts = requestData.reduce((counts, req) => {
        counts[req.type] = (counts[req.type] || 0) + 1;
        return counts;
    }, {});

    return (
        <div className="d-flex flex-column" style={{ height: '100vh',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
            color: '#002d62'}}>
                
            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <img src="/img/fpop-logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                    <FaUserCircle size={40} color="#000" style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
                 </div>
            </nav>

           < div className={`position-fixed end-0 h-100  shadow ${showSidebar ? 'translate-x-0' : 'translate-x-100'}`}
                           style={{
                             backgroundColor: '#E0F2F7',
                             top: '69px', 
                             width: '250px',
                             transition: 'transform 0.3s ease, opacity 0.3s ease',
                             zIndex: 1050,
                             borderLeft: '2px solid #ddd',
                             display: showSidebar ? 'block' : 'none', 
                             opacity: showSidebar ? 1 : 0,  }}>
            
                      <div className="p-2">
                          <div className="d-flex justify-content-end"><FaTimes size={24} style={{ cursor: 'pointer' }} onClick={toggleSidebar} /></div>
                            <h5 className="mt-2 mb-3">Natalie Jenh Alarcon</h5>
                              <ul className="list-group" style={{backgroundColor: '#E0F2F7'}}>
                                    <li className="list-group-item" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>View Profile</li>
                                    <li className="list-group-item" onClick={() => navigate('/edit-profile')} style={{ cursor: 'pointer' }}> Edit Profile</li>
                                    <li className="list-group-item" onClick={() => navigate('/help')} style={{ cursor: 'pointer' }}>Help</li>
                                  <li className="list-group-item" onClick={() => navigate('/data-privacy')} style={{ cursor: 'pointer' }}> Data and Privacy</li>
                                <li className="list-group-item text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
                              </ul>
                            </div>
                        </div>

            

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

                <main className="col-md-9 col-lg-10 ms-md-auto p-4" style={{ marginLeft: '16.6667%', backgroundColor: '#B3C8CF', minHeight: '85vh', borderRadius: '12px', padding: '24px' }}>
                    <div className="container py-3">
                        <h1 className="text-center rounded shadow" style={{ backgroundColor: '#205781', color: "white", marginBottom: '20px',fontSize:"34px" }}>Pending Requests</h1>


                        <div className="mt-3">
                            <div className="row g-4">
                                {Object.keys(requestCounts).map((type, index) => (
                                    <div key={index} className="col-md-4">
                                        <div className="card shadow-sm" style={{ borderLeft: '5px solid #205781', padding: '16px', backgroundColor: '#F1F5F9' }}>
                                            <h5 className="text-primary">{type}</h5>
                                            <p style={{ fontSize: '14px', color: '#555' }}>
                                                Number of Requests: <strong>{requestCounts[type]}</strong>
                                            </p>
                                            <button className="btn btn-primary" onClick={() => handleShow(requestData.find(req => req.type === type))}>
                                                View Requests
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{currentRequest?.type}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {currentRequest ? (
                                <>
                                    <p><strong>Description:</strong> {currentRequest.description}</p>
                                    <p><strong>Quantity:</strong> {currentRequest.quantity}</p>
                                    <p><strong>Requested By:</strong> {currentRequest.requestedBy}</p>
                                </>
                            ) : null}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleClose}>Accept Request</Button>
                            <Button variant="danger" onClick={handleClose}>Reject Request</Button>
                        </Modal.Footer>
                    </Modal>
                </main>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        </div>
    );
}

export default Request;
