import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBoxOpen, FaExchangeAlt, FaClipboardCheck, FaPowerOff, FaWarehouse,FaUserCircle,FaTimes } from "react-icons/fa";

let products = [
  { id: 1, name: 'Aspirin', category: 'Pain Reliever', price: 12.99, inStock: 100, reorderLevel: 10, sku: 'ASP123' },
  { id: 2, name: 'Bandages', category: 'First Aid', price: 5.49, inStock: 200, reorderLevel: 20, sku: 'BAN456' },
  { id: 3, name: 'Thermometer', category: 'Medical Equipment', price: 15.99, inStock: 50, reorderLevel: 5, sku: 'THR789' },
  { id: 4, name: 'Cough Syrup', category: 'Cold & Cough', price: 8.99, inStock: 150, reorderLevel: 15, sku: 'COU012' },
  { id: 5, name: 'Antiseptic', category: 'First Aid', price: 7.49, inStock: 80, reorderLevel: 8, sku: 'ANT345' },
  { id: 5, name: 'Condoms', category: 'Contraceptives', price: 7.49, inStock: 80, reorderLevel: 8, sku: 'okkk' },

];


export const getProducts = () => products;

export const stockIn = (productId, amount) => {
  products = products.map((product) =>
    product.id === productId
      ? { ...product, inStock: product.inStock + amount }
      : product
  );
};

export const stockOut = (productId, amount) => {
  products = products.map((product) =>
    product.id === productId
      ? { ...product, inStock: Math.max(0, product.inStock - amount) }
      : product
  );
};

function Products() {
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

  const [LocalProduct, setLocalProducts] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setLocalProducts(getProducts());
  }, []);

  const handleStockOut = (productId) => {
    stockOut(productId, amount);
    setLocalProducts(getProducts());
  };

  const handleStockIn = (productId) => {
    stockIn(productId, amount);
    setLocalProducts(getProducts());
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value, 10) || 0);
  };

  const handleEdit = (productId) => {
 
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
  
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div className="d-flex flex-column" style={{ height: '100vh',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
      color: '#002d62'}}>
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

      <div className="container-fluid d-flex flex-grow-1">
        <div className="row flex-grow-1">
         
          <nav className="col-md-3 col-lg-2 p-3 sidebar position-fixed"  style={{ top: '56px', bottom: '0', backgroundColor: '#E0F2F7', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', height: 'calc(100vh - 56px)' }}>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" onClick={HomeNavigate}>
                <button className="nav-link btn btn-link text-start w-100">
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

  <div className="col-md-9 col-lg-10 p-3" style={{ marginLeft: '16.6667%', backgroundColor: '#B3C8CF' }}>
    <h1 className="text-center rounded shadow" style={{ backgroundColor: '#205781', color: "white", marginTop: '70px' ,fontSize:'34px'}}> List Of Products</h1>

  
  <div className="d-flex align-items-center mb-3" style={{ gap: '8px', marginLeft: '10px' }}>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Search by name, SKU, category, or brand"
      onChange={(e) => handleSearch(e.target.value)} 
      style={{ 
        border: "2px solid #002d62", 
        borderRadius: "10px", 
        width: '100%' 
      }} 
    />
    <button 
      className="btn" 
      style={{
        backgroundColor: '#205781', 
        color: '#fff', 
        padding: '10px 20px', 
        borderRadius: '8px'
      }} 
      onClick={() => handleSearchClick()}
    >
      Search
    </button>
  </div>

  
  <div className="d-flex mb-3 " style={{ gap: '10px', marginLeft: '10px' }}>
    <select 
      className="form-select" 
      onChange={(e) => handleFilterByCategory(e.target.value)}
      style={{
        border: "2px solid #002d62",
        borderRadius: "10px",
        width: '100%'
      }}
    >
      <option value="">Select Category</option>
      <option value="Contraceptives">Contraceptives</option>
      <option value="Maternal Health">Maternal Health</option>
      <option value="Sexual Health and Wellness">Sexual Health and Wellness</option>
      <option value="Family Planning Devices">Family Planning Devices</option>
      <option value="Menstrual Health">Menstrual Health</option>
      <option value="Educational Materials">Educational Materials</option>
      <option value="Women’s Health Products">Women’s Health Products</option>
      <option value="Post-Procedure Care">Post-Procedure Care</option>
      <option value="Emergency Supplies">Emergency Supplies</option>
    </select>

    <select 
      className="form-select" 
      onChange={(e) => handleFilterByAvailability(e.target.value)}
      style={{
        border: "2px solid #002d62",
        borderRadius: "10px",
        width: '100%'
      }}
    >
      <option value="">Select Availability</option>
      <option value="inStock">In Stock</option>
      <option value="lowStock">Low Stock</option>
      <option value="outOfStock">Out of Stock</option>
    </select>

    <select 
      className="form-select" 
      onChange={(e) => handleSort(e.target.value)}
      style={{
        border: "2px solid #002d62",
        borderRadius: "10px",
        width: '100%'
      }}
    >
      <option value="">Sort By</option>
      <option value="name">Alphabetically</option>
      <option value="price">Price</option>
      <option value="quantity">Quantity</option>
    </select>
  </div>

  <div style={{ marginLeft: '10px', marginBottom: '15px' }}>
    <button 
      className="btn" 
      style={{
        backgroundColor: '#205781', 
        color: '#fff', 
        padding: '10px 20px', 
        borderRadius: '8px'
      }} 
      onClick={StockInNavigate}
    >
      Add Product
    </button>
  </div>


  <div className="row g-3">
    {LocalProduct.map((product) => (
      <div className="col-12 col-md-3" key={product.id}>
        <div 
          style={{ 
            marginLeft: '10px',
            border: '1px solid #002d62', 
            borderRadius: '12px', 
            backgroundColor: '#F8FAFC', 
            padding: '16px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '10px', 
            height: 'auto', 
            textAlign: 'center', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '100%', 
            maxWidth: '300px' 
          }}
        >
          
          <div 
            style={{ 
              width: '100%', 
              height: '180px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '8px' 
            }}
          >
            <img 
              src={product.image || '/img/7.png'} 
              alt={product.name} 
              style={{ 
                maxHeight: '100%', 
                maxWidth: '100%', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }} 
            />
          </div>

          
          <h6 style={{ 
            fontSize: '1rem', 
            fontWeight: '600', 
            color: '#374151', 
            margin: 0, 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis'
          }}>
            <a 
              href={`/product-details/${product.id}`} 
              className="text-decoration-none" 
              style={{ color: '#007BFF' }}
            >
              {product.name}
            </a>
          </h6>

          <div style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5' }}>
            <div><strong>SKU:</strong> {product.sku}</div>
            <div><strong>Category:</strong> {product.category}</div>
            <div><strong>Price:</strong> ${product.price}</div>
            <div><strong>Stock:</strong> {product.inStock}</div>
          </div>

        
          <div className="d-flex justify-content-center gap-2">
            <button 
              className="btn btn-sm" 
              style={{ 
                backgroundColor: '#34D399', 
                color: '#fff', 
                border: 'none', 
                fontSize: '0.75rem', 
                padding: '8px 14px', 
                borderRadius: '6px' 
              }}
              onClick={() => handleEdit(product.id)}
            >
              Edit
            </button>
            <button 
              className="btn btn-sm" 
              style={{ 
                backgroundColor: '#EF4444', 
                color: '#fff', 
                border: 'none', 
                fontSize: '0.75rem', 
                padding: '8px 14px', 
                borderRadius: '6px' 
              }}
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Products;
