import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes, FaBoxes, FaHome, FaBoxOpen, FaExchangeAlt, FaExclamationTriangle, FaClipboardCheck, FaPowerOff, FaCalendarAlt, FaTruckLoading, FaClipboardList, FaWarehouse, FaUserCircle } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleLogout = () => {
    navigate('/'); // Adjust as needed
  };

  const cards = [
    { icon: <FaBoxes className="text-success display-6 mb-2" />, title: "Total Product Inventory", value: 100, path: "/products" },
    { icon: <FaExclamationTriangle className="text-warning display-6 mb-2" />, title: "Low Stock", value: 3, path: "/lowstock" },
    { icon: <FaExclamationTriangle className="text-danger fs-1 mb-2" />, title: "Out of Stock", value: 20, path: "/outstock" },
    { icon: <FaCalendarAlt className="text-danger display-6 mb-2" />, title: "Expiring Soon", value: 20, path: "/expiring" },
    { icon: <FaClipboardList className="text-success display-6 mb-2" />, title: "Pending Requests", value: 21, path: "/request" },
    { icon: <FaTruckLoading className="text-success display-6 mb-2" />, title: "Incoming Supplies", value: 21, path: "/incoming" },
  ];

  return (
    <div className="d-flex flex-column" style={{ height: '100vh', fontFamily: 'Cambria, Cochin, Georgia, Times, serif', color: '#002d62' }}>

    
      <header className="text-white fixed-top" style={{ backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid white', zIndex: 1 }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <img src="/img/fpop-logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
          <FaUserCircle size={40} color="#000" style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
        </div>
      </header>

     
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


     
      <div className="col-lg-2 p-3 position-fixed" style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
      <ul className="nav flex-column">
          <li className="nav-item mb-2" onClick={() => navigate('/home')}>
            <button className="nav-link btn btn-link text-start w-100">
              <FaHome className="me-2" /> Dashboard
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/products')}>
              <FaWarehouse className="me-2 text-warning" /> View Products
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/stockin')}>
              <FaBoxOpen className="me-2 text-success" /> Add Product
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/transfers')}>
              <FaExchangeAlt className="me-2 text-primary" /> Stock Transfers
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-link btn btn-link text-start w-100" onClick={() => navigate('/audit')}>
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

     
      <div className="container-fluid d-flex flex-grow-1">
        <div className="row flex-grow-1">
          <main className="col-md-9 col-lg-10 ms-md-auto mt-4 p-4" style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', marginLeft: '16.6667%', backgroundColor: '#B3C8CF', minHeight: '80vh' }}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{ marginTop: "50px" }}>
              {cards.map((cardData, index) => (
                <div key={index} className="col">
                  <div className="card"
                    style={{
                      border: '2px solid #002d62',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      backgroundColor: '#f8f9fa',
                    }}
                    onClick={() => navigate(cardData.path)}
                  >
                    <div className="card-body text-center">
                      {cardData.icon}
                      <h5 className="card-title">{cardData.title}</h5>
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
