import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import { FaHome, FaWarehouse, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff } from 'react-icons/fa';

function Incoming() {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [currentSupply, setCurrentSupply] = useState(null);
    const [isReportGenerated, setIsReportGenerated] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleShow = (supply) => {
        setCurrentSupply(supply);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentSupply(null);
    };

    const handleGenerateReport = () => {
        toast.success('Report Generated!');
        setIsReportGenerated(true);
        setShowModal(false);
    };

    const handleRedirectToDashboard = () => {
        navigate('/home');
    };

   
    const handlePrintReport = () => {
        toast.info('Printing Report...');
    };
    const handleDownloadReport = () => {
        const reportData = [
            ['Description', 'Supplier', 'Quantity', 'Location'], 
            ['Medical Supplies Restock', 'ABC Medical Supplies', 75, 'Warehouse A'],
            ['Office Stationery Restock', 'Office World', 40, 'Warehouse B'],
            ['New Product Addition', 'Tech Supplies', 20, 'Warehouse C'],
            ['Product Return (Damaged)', 'Furniture Inc.', 15, 'Warehouse A'],
            ['Inventory Adjustment Supplies', 'Global Stock', 10, 'Warehouse B'],
        ];

        const csvContent = reportData.map(row => row.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'incoming_supplies_report.csv'; 

        link.click();

        toast.info('Downloading Report...');
    };

   

    const incomingSupplies = [
        { 
            description: 'Medical Supplies Restock',
            quantity: 75, 
            location: 'Warehouse A',
            supplier: 'ABC Medical Supplies' 
        },
        { 
            description: 'Office Stationery Restock', 
            quantity: 40, 
            location: 'Warehouse B', 
            supplier: 'Office World'
        },
        { 
            description: 'New Product Addition',
            quantity: 20, 
            location: 'Warehouse C', 
            supplier: 'Tech Supplies'
        },
        { 
            description: 'Product Return (Damaged)',
            quantity: 15, 
            location: 'Warehouse A', 
            supplier: 'Furniture Inc.'
        },
        { 
            description: 'Inventory Adjustment Supplies',
            quantity: 10, 
            location: 'Warehouse B',
            supplier: 'Global Stock'
        },
    ];

    return (
        <div className="d-flex flex-column" style={{ height: '100vh', fontFamily: 'Cambria, Cochin, Georgia, Times, serif', color: '#002d62' }}>
            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                <div className="container-fluid">
                    <img src="/img/fpop-logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                </div>
            </nav>

            <div className="d-flex flex-grow-1 mt-5">
                <div className="col-lg-2 p-3 position-fixed" style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/home')}>
                                <FaHome className="me-2" /> Dashboard
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/products')}>
                                <FaWarehouse className="me-2 text-warning" /> View Products
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/add-product')}>
                                <FaBoxOpen className="me-2 text-success" /> Add Product
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/stock-transfers')}>
                                <FaExchangeAlt className="me-2 text-primary" /> Stock Transfers
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/stock-audit')}>
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
                        <h1 className="text-center rounded shadow" style={{ backgroundColor: '#205781', color: "white", marginBottom: '20px' ,fontSize:"34px"}}>Incoming Supplies </h1>

                        <div className="mb-4 d-flex justify-content-between align-items-center">
                            <input type="text" className="form-control" placeholder="Search by Supplier..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ maxWidth: '250px' ,border:"2PX SOLID #205781 "}} />
                        </div>

                        <div className="mt-3">
                            <div className="row g-4">
                                {incomingSupplies.length > 0 ? (
                                    incomingSupplies.filter((supply) => 
                                        supply.supplier.toLowerCase().includes(searchQuery.toLowerCase())
                                    ).map((supply, index) => (
                                        <div key={index} className="col-md-4">
                                            <div className="card shadow-sm" style={{ borderLeft: '5px solid #205781', padding: '16px', backgroundColor: '#F1F5F9' }}>
                                                <h5 className="text-primary">{supply.description}</h5>
                                                <p style={{ fontSize: '14px', color: '#555' }}>
                                                    Supplier: <strong>{supply.supplier}</strong><br />
                                                    Quantity: <strong>{supply.quantity}</strong><br />
                                                    Location: <strong>{supply.location}</strong>
                                                </p>
                                                <button className="btn btn-primary" onClick={() => handleShow(supply)}>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p>No incoming supplies found.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {isReportGenerated && (
                            <div className="mt-4 text-center">
                                <h3>Report Generated Successfully!</h3>
                                <p>You can now download or print the report.</p>
                                <button className="btn btn-success" onClick={handleDownloadReport}>Download Report</button>
                                <button className="btn btn-info ms-2" onClick={handlePrintReport}>Print Report</button>
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {currentSupply && (
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Supply Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{currentSupply.description}</h5>
                        <p><strong>Supplier:</strong> {currentSupply.supplier}</p>
                        <p><strong>Quantity:</strong> {currentSupply.quantity}</p>
                        <p><strong>Location:</strong> {currentSupply.location}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="success" onClick={handleGenerateReport}>Generate Report</Button>
                    </Modal.Footer>
                </Modal>
            )}

            <ToastContainer />
        </div>
    );
}

export default Incoming;
