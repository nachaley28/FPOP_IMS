import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse } from "react-icons/fa";
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
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'white', backgroundImage: `url(/img/14.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', fontFamily: "'Poppins', sans-serif" }}>
        
            <nav className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
                <div className="container-fluid">
                    <img src="/img/fpop-logo.png" alt="Logo" width="120" height="auto" className="d-inline-block align-text-top" />
                </div>
            </nav>

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
