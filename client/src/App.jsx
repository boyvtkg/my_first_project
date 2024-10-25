
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
    <Routes>
      {/* Route for the Login Page - completely separate */}
      <Route path="/login" element={<Login />} />

      {/* Route for your main website with the Navbar */}
      <Route
        path="/*" // Use wildcard to catch all other paths
        element={
    <>
    
      <Navbar/>
      <About/>
      <Home/>
      <Services/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
    }
    />
  </Routes>
</Router>
  );
}

export default App;
