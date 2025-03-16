import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";

function StockIn() {
    const navigate = useNavigate();

     const [showSidebar, setShowSidebar] = useState(false);
          const toggleSidebar = () => setShowSidebar(!showSidebar);
          const handleLogout = () => {
            navigate('/'); 
          };
    
    

    const HomeNavigate = () => navigate('/home');
    const ProductNavigate = () => navigate('/products');
    const StockInNavigate = () => navigate('/stockin');
    const StockOutNavigate = () => navigate('/stockout');
    const TransferNavigate = () => navigate('/transfers');
    const StockAuditNavigate = () => navigate('/audit');

    const [productName, setProductName] = useState('');
    const [sku, setSKU] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [expiration, setExpiration] = useState('');
    const [receivedBy, setReceivedBy] = useState('');
    const [supplier, setSupplier] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [recentStockIn, setRecentStockIn] = useState([{
        date: '2024-03-15',
        product: 'Paracetamol',
        sku: 'jjjjj',
        quantity: 150,
        category: 'Pain Reliever',
        price: 12.50,
        expiration: '2026-03-15',
        receivedBy: 'Alice',
        supplier: 'MedSupplyCo',
        additionalInfo: 'Delivered via courier',
    }, {
        date: '2024-03-10',
        product: 'Bandages',
        sku: 'jjjjj',
        quantity: 200,
        category: 'First Aid',
        price: 12.50,
        expiration: '2025-03-10',
        receivedBy: 'Bob',
        supplier: 'FirstAidPlus',
        additionalInfo: 'Standard delivery',
    }]);

    const handleStockInSubmit = (e) => {
        e.preventDefault();
        if (!productName || !sku || !quantity || !category || !expiration || !receivedBy || !supplier) {
            alert('Please fill in all required fields.');
            return;
        }
        setRecentStockIn([
            ...recentStockIn,
            {
                date: new Date().toISOString().split('T')[0],
                product: productName,
                sku: sku,
                quantity: parseInt(quantity, 10) || 0,
                category: category,
                price: price,
                expiration: expiration,
                receivedBy: receivedBy,
                supplier: supplier,
                additionalInfo: additionalInfo,
            },
        ]);
        setProductName('');
        setSKU('');
        setQuantity('');
        setCategory('');
        setExpiration('');
        setReceivedBy('');
        setSupplier('');
        setAdditionalInfo('');
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

                <div className="flex-grow-1 p-3" style={{ marginLeft: '16.6667%' ,backgroundColor:'#B3C8CF'}}>
                    <div className="container">
                        <div className="row">
            
                            <div className="col-md-12 col-sm-12 mb-4">
                                <div className="card shadow-sm" style={{ borderRadius: '10px', border: '1px solid #344CB7',marginTop:'50px' }}>
                                    <div className="card-header  text-white" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px',backgroundColor:'#3674B5' }}>
                                        <h5>Add Product Form</h5>
                                    </div>
                                    <div className="card-body p-3" style={{backgroundColor:'#F8FAFC'}}>
                                        <form onSubmit={handleStockInSubmit}>
                                            <div className="row">
                                              
                                                <div className="col-md-6 col-sm-14 mb-3">
                                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                                    <input type="text" className="form-control form-control-sm" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }}/>
                                                </div>

                                               
                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="sku" className="form-label">SKU</label>
                                                    <input type="text" className="form-control form-control-sm" id="sku" value={sku} onChange={(e) => setSKU(e.target.value)} required style={{ height: '40px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 '}}/>
                                                </div>

                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                                    <input type="number" className="form-control form-control-sm" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required  style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }}/>
                                                </div>

                                                
                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="category" className="form-label">Category</label>
                                                    <select
                                                        className="form-select form-select-sm"
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)} required style={{ height: '40px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 '}}>
                                                        <option value="">Select Category</option>
                                                        <option value="Contraceptives">Contraceptives</option>
                                                        <option value="Maternal Health">Maternal Health</option>
                                                        <option value="Sexual Health and Wellness">Sexual Health and Wellness</option>
                                                        <option value="Family Planning Devices">Family Planning Devices</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input type="number" className="form-control form-control-sm" id="price" value={price} onChange={(e) => setPrice(e.target.value)} style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }}/>
                                                </div>

                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="expiration" className="form-label">Expiration Date</label>
                                                    <input type="date" className="form-control form-control-sm" id="expiration" value={expiration} onChange={(e) => setExpiration(e.target.value)} required style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }} />
                                                </div>

                                               
                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="receivedBy" className="form-label">Received By</label>
                                                    <input type="text" className="form-control form-control-sm" id="receivedBy" value={receivedBy} onChange={(e) => setReceivedBy(e.target.value)} required style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }}/>
                                                </div>

                                               
                                                <div className="col-md-6 col-sm-12 mb-3">
                                                    <label htmlFor="supplier" className="form-label">Supplier</label>
                                                    <input type="text" className="form-control form-control-sm" id="supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required style={{ height: '40px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 ' }}/>
                                                </div>

                                                <div className="col-md-14 col-sm-16 mb-3"> 
                                                    <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
                                                    <textarea className="form-control form-control-sm" id="additionalInfo" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} style={{ height: '40px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' ,border:'2px solid  #002d62 '}}/>
                                                </div>

                                            </div>

                                            <button type="submit" className="btn btn-sm btn-success">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="col-md-12 col-sm-12">
                                <div className="card shadow-sm">
                                    <div className="card-header  text-white" style={{backgroundColor:'#3674B5'}}>
                                        <h5>Recently Added Products</h5>
                                    </div>
                                    <div className="card-body p-3">
                                        <table className="table table-striped table-sm"  style={{backgroundColor:'#D9EAFD'}}>
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Expiration</th>
                                                    <th>Received By</th>
                                                    <th>Supplier</th>
                                                    <th>Additional Info</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recentStockIn.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.date}</td>
                                                        <td>{item.product}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.expiration}</td>
                                                        <td>{item.receivedBy}</td>
                                                        <td>{item.supplier}</td>
                                                        <td>{item.additionalInfo}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockIn;
