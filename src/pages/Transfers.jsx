import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";

function Transfers() {
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

    const [transfers, setTransfers] = useState([
        { id: 1, product: 'Product A', from: 'Main Warehouse', to: 'Branch 1', quantity: 50},
        { id: 2, product: 'Product B', from: 'Main Warehouse', to: 'Branch 2', quantity: 30},
        { id: 3, product: 'Product C', from: 'Main Warehouse', to: 'Branch 3', quantity: 100 },
    ]);

    const [formData, setFormData] = useState({
        product: '',
        from: '',
        to: '',
        quantity: '',
      
    });

    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Number(formData.quantity) <= 0) {
            alert('Quantity must be greater than zero.');
            return;
        }

        if (editId !== null) {
            setTransfers(transfers.map(t => t.id === editId ? { ...t, ...formData, quantity: Number(formData.quantity) } : t));
            setEditId(null);
        } else {
            const newTransfer = {
                id: transfers.length + 1,
                ...formData,
                quantity: Number(formData.quantity)
            };
            setTransfers([...transfers, newTransfer]);
        }

        setFormData({ product: '', from: '', to: '', quantity: '', date: '' });
    };

    const handleEdit = (id) => {
        const transfer = transfers.find(t => t.id === id);
        setFormData(transfer);
        setEditId(id);
    };

    const handleDelete = (id) => {
        setTransfers(transfers.filter(t => t.id !== id));
    };

    return (
        <div className="d-flex flex-column" style={{ height: '100vh',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',color: '#002d62'}}>            
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
                                <FaClipboardCheck className="me-2 text-purple" /> Stock Audit
                            </button>
                        </li>
                        <li className="nav-item mt-auto mb-2">
                            <a href="/" className="nav-link btn btn-link text-start w-100 text-danger">
                                <FaPowerOff className="me-2" /> Log Out
                            </a>
                        </li>
                    </ul>
                </div>

        <div className="col-md-9 col-lg-10 p-4" style={{ marginLeft: '16.6667%',  backgroundColor: '#B3C8CF'}}>
            <div className="card shadow-sm" style={{ marginTop: '20px' }}>
                <h1 className="rounded-top" style={{ backgroundColor: '#205781', color: "white", fontSize:'35px' }}>
                    Transfer Products Form
                </h1>

        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        name="product"
                        className="form-control"
                        placeholder="Product Name"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        name="from"
                        className="form-control"
                        placeholder="From (Source)"
                        value={formData.from}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        name="to"
                        className="form-control"
                        placeholder="To (Destination)"
                        value={formData.to}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="number"
                        name="quantity"
                        className="form-control"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" style={{ padding: '10px', fontSize: '16px' }}>
                {editId !== null ? 'Update Transfer' : 'Add Transfer'}
            </button>
        </form>
    </div>

    <div className="table-responsive mt-4">
        <table className="table table-striped table-hover">
            <thead className="table">
                <tr>
                    <th>Transfer ID</th>
                    <th>Product</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {transfers.length > 0 ? (
                    transfers.map((transfer) => (
                        <tr key={transfer.id}>
                            <td>{transfer.id}</td>
                            <td>{transfer.product}</td>
                            <td>{transfer.from}</td>
                            <td>{transfer.to}</td>
                            <td>{transfer.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-success btn-sm me-2"
                                    onClick={() => handleEdit(transfer.id)}
                                    style={{ padding: '5px 12px', fontSize: '14px' }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(transfer.id)}
                                    style={{ padding: '5px 12px', fontSize: '14px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-3">No transfers found.</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
<div className="col-md-9 col-lg-10 p-4" style={{ marginLeft: '16.6667%', backgroundColor: '#F1F5F9' }}>
    <div className="card shadow-sm" style={{ marginTop: '20px' }}>
        <h1 className="text-center rounded-top" style={{ 
            backgroundColor: '#205781', 
            color: "white", 
            padding: '10px 20px', 
            fontSize: '24px', 
            width: 'auto', 
            margin: '0 auto', 
            display: 'inline-block' 
        }}>
            Out of Stock Products
        </h1>

        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        name="product"
                        className="form-control"
                        placeholder="Product Name"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        name="from"
                        className="form-control"
                        placeholder="From (Source)"
                        value={formData.from}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        name="to"
                        className="form-control"
                        placeholder="To (Destination)"
                        value={formData.to}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="number"
                        name="quantity"
                        className="form-control"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#002d62", borderRadius: "10px", width: '100%' }}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" style={{ padding: '10px', fontSize: '16px' }}>
                {editId !== null ? 'Update Transfer' : 'Add Transfer'}
            </button>
        </form>
    </div>

    <div className="mt-5">
        <h3 className="text-center" style={{ backgroundColor: '#205781', color: 'white', padding: '10px' }}>
            Recent Transfer Products
        </h3>
        <div className="table-responsive mt-4">
            <table className="table table-striped table-hover">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Transfer ID</th>
                        <th>Product</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.length > 0 ? (
                        transfers.map((transfer) => (
                            <tr key={transfer.id}>
                                <td>{transfer.id}</td>
                                <td>{transfer.product}</td>
                                <td>{transfer.from}</td>
                                <td>{transfer.to}</td>
                                <td>{transfer.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => handleEdit(transfer.id)}
                                        style={{ padding: '5px 12px', fontSize: '14px' }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(transfer.id)}
                                        style={{ padding: '5px 12px', fontSize: '14px' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-3">No transfers found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
</div>

                        
            </div>
        </div>
    );
}

export default Transfers;
