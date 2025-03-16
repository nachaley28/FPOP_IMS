import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import './App.css';
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import StockIn from './pages/Stockin'; 
import Transfers from './pages/Transfers';
import Audit from './pages/Audit';
import OutStock from './pages/OutStock';
import LowStock from './pages/LowStock';
import Expiring from './pages/Expiring';
import Request from './pages/Request';
import Incoming from './pages/Incoming';





function RouteWithTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence>

      <motion.div
        key={location.pathname}  
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}  
        exit={{ opacity: 0 }}    
        transition={{ duration: 1 }}  
        className="page-container" 
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stockin" element={<StockIn />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/outstock" element={<OutStock />} />
          <Route path="/lowstock" element={<LowStock />} />
          <Route path="/expiring" element={<Expiring />} />
          <Route path="/request" element={<Request />} />
          <Route path="/incoming" element={<Incoming />} />

          

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <RouteWithTransitions />
      </div>
    </Router>
  );
}

export default App;
