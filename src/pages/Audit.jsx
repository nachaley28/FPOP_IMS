
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Audit() {
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

 
    const salesData = {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            label: 'Total Sales (Units)',
            data: [120, 150, 200],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    const tableHeaderStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
        fontWeight: 'bold'
    };

  
    const renderTableRow = (product, value) => (
        <tr key={product}>
            <td style={tableCellStyle}>{product}</td>
            <td style={tableCellStyle}>{value}</td>
        </tr>
    );

    const tableCellStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left'
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
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={HomeNavigate}><FaHome className="me-2" /> Dashboard</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={ProductNavigate}><FaWarehouse className="me-2 text-warning" /> View Products</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={StockInNavigate}><FaBoxOpen className="me-2 text-success" /> Add Product</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={TransferNavigate}><FaExchangeAlt className="me-2 text-primary" /> Stock Transfers</button></li>
                        <li className="nav-item mb-2"><button className="nav-link btn btn-link text-start w-100" onClick={StockAuditNavigate}><FaClipboardCheck className="me-2 text-purple" /> Stock Audit</button></li>
                        <li className="nav-item mt-auto mb-2"><a href="/" className="nav-link btn btn-link text-start w-100 text-danger"><FaPowerOff className="me-2" /> Log Out</a></li>
                    </ul>
                </div>

                <div className="col-md-9 col-lg-10 p-3" style={{ marginLeft: '16.6667%', backgroundColor: '#B3C8CF', fontFamily: 'Arial, sans-serif', minHeight: '100vh', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
                        <div style={{ backgroundColor: '#E3F2FD', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', width: '45%' }}>
                            <h3 style={{ textAlign: 'center', color: '#1976D2' }}>Sales Overview</h3>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#BBDEFB', color: '#0D47A1' }}>
                                        <th style={tableHeaderStyle}>Product</th>
                                        <th style={tableHeaderStyle}>Total Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRow('Product A', 120)}
                                    {renderTableRow('Product B', 150)}
                                    {renderTableRow('Product C', 200)}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ backgroundColor: '#E8F5E9', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', width: '45%' }}>
                            <h3 style={{ textAlign: 'center', color: '#388E3C' }}>Revenue Overview</h3>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#C8E6C9', color: '#1B5E20' }}>
                                        <th style={tableHeaderStyle}>Product</th>
                                        <th style={tableHeaderStyle}>Total Distributed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableRow('Product A', '$2400')}
                                    {renderTableRow('Product B', '$3000')}
                                    {renderTableRow('Product C', '$4000')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div style={{ backgroundColor: '#FFF3E0', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', width: '45%' }}>
                            <h3 style={{ textAlign: 'center', color: '#EF6C00' }}>In Demand Products</h3>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    {renderTableRow('Product C', 200)}
                                    {renderTableRow('Product B', 150)}
                                    {renderTableRow('Product A', 120)}
                                </tbody>
                            </table>
                        </div>

                        <div style={{ width: '50%' }}>
                            <Bar data={salesData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Audit;
