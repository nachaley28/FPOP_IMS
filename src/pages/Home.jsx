import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPaperPlane, FaTimesCircle, FaBoxes, FaHome, FaBoxOpen, FaBox, FaExchangeAlt, FaExclamationTriangle, FaClipboardCheck, FaPowerOff, FaCalendarAlt, FaTruckLoading, FaClipboardList, FaWarehouse } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();


 const HomeNavigate = () => navigate('/home');
  const ProductNavigate = () => navigate('/products');
  const StockInNavigate = () => navigate('/stockin');

  const TransferNavigate = () => navigate('/transfers');
  const StockAuditNavigate = () => navigate('/audit');

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="d-flex flex-column" style={{ height: '100vh', backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', fontFamily: 'Poppins, sans-serif' }}>

      <header className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
          <div className="container-fluid">
            <img src="/img/fpop-logo.png" alt="Logo" width="120" height="auto" className="d-inline-block align-text-top" />
          </div>
      </header>

      <div className="container-fluid d-flex flex-grow-1">
        <div className="row flex-grow-1">

          <nav className="col-md-3 col-lg-2 p-3 sidebar position-fixed"  style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
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
          </nav>

          <main className="col-md-9 col-lg-10 ms-md-auto mt-4 p-4" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginLeft: '16.6667%' ,backgroundColor:'#B3C8CF'}}>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{marginTop:"50px"}}>
                {[
                  { icon: <FaBoxes className="text-success display-6 mb-2" />, title: "Total Product Inventory", value: 100 },
                  { icon: <FaTimesCircle className="text-danger display-6 mb-2" />, title: "Out of Stock", value: 4 },
                  { icon: <FaExclamationTriangle className="text-warning display-6 mb-2" />, title: "Low Stock", value: 3 },
                  { icon: <FaCalendarAlt className="text-danger display-6 mb-2" />, title: "Expiring Soon", value: 20 },
                  { icon: <FaClipboardList className="text-success display-6 mb-2" />, title: "Pending Requests", value: 21 },
                  { icon: <FaTruckLoading className="text-success display-6 mb-2" />, title: "Incoming Supplies", value: 21 },
                ].map((cardData, index) => (
                  <div key={index} className="col">
                    <div className="card" style={{ border: '2px solid #002d62', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                      <div className="card-body text-center" style={{ padding: '1rem' }}>
                        {cardData.icon}
                        <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cardData.title}</h5>
                        <p className="card-text fs-4 fw-bold">{cardData.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>

        </div>
      </div>
    </div>
  );
}

export default Home;