import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaBox, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse } from "react-icons/fa";

function Transfers() {
    const navigate = useNavigate();

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
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'white', backgroundImage: `url(/img/14.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', fontFamily: "'Poppins', sans-serif" }}>
            {/* Fixed Header */}
            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                <div className="container-fluid">
                    <img src="/img/fpop-logo.png" alt="Logo" width="120" height="auto" className="d-inline-block align-text-top" />
                </div>
            </nav>

            <div className="d-flex flex-grow-1 mt-5">
                {/* Fixed Sidebar */}
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

                <div className="col-md-9 col-lg-10 p-3" style={{ marginLeft: '16.6667%', backgroundColor: '#B3C8CF' }}>
                    <div style={{ backgroundColor: 'white', marginTop: '25px' }}>
                        <h2 className="text-center mb-4 text-dark" style={{ marginTop: '25px' }}>Stock Transfers</h2>

                        {/* Transfer Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="product"
                                        className="form-control"
                                        placeholder="Product Name"
                                        value={formData.product}
                                        onChange={handleChange}
                                        required
                                        style={{border:"2px solid  #002d62",borderRadius: "10px",marginLeft:'10px',width: '90%' }}
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
                                        style={{border:"2px solid  #002d62",borderRadius: "10px",marginLeft:'10px',width: '90%' }}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="to"
                                        className="form-control"
                                        placeholder="To (Destination)"
                                        value={formData.to}
                                        onChange={handleChange}
                                        required
                                        style={{border:"2px solid  #002d62",borderRadius: "10px",marginLeft:'10px',width: '90%' }}
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
                                        style={{border:"2px solid  #002d62",borderRadius: "10px",marginLeft:'10px',width: '90%' }}
                                    />
                                </div>
                            </div>

                           
                            <button type="submit" className="btn btn-primary w-100">
                                {editId !== null ? 'Update Transfer' : 'Add Transfer'}
                            </button>
                        </form>
                    </div>

                    {/* Transfers Table */}
                    <div className="table-responsive mt-4">
                        <table className="table table-bordered">
                            <thead className="table-dark">
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
                                                <button className="btn btn-success btn-sm me-2" onClick={() => handleEdit(transfer.id)}>
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(transfer.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-3">No transfers found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transfers;
