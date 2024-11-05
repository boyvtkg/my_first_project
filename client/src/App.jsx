
import "./App.css";
import { About, Blog, MyFooter, Home, Navbar, Newsletter, Product, Services } from './components/mainComponents';
import { SubmissionForm, Transactions, TransFilter } from './pages/dashboardPages';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Login Page - completely separate */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/*<Route path="/dashboard/submissionform" element={<SubmissionForm />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
        <Route path="/dashboard/transfilter" element={<TransFilter />} />*/}

        {/* Route for your main website with the Navbar */}
        <Route
          path="/*" // Use wildcard to catch all other paths
          element={
            <>

              <Navbar />
              <About />
              <Home />
              <Services />
              <Product />
              <Blog />
              <Newsletter />
              <MyFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
