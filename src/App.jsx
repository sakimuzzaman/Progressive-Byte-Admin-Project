import Report from "./Pages/Report";
import Dashboard from "./components/Dashboard";

import Layout from "./components/Shared/Layout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Layout />} >
            
            <Route index element={<Dashboard/>} />
            <Route path="/reports" element={<Report />} />
            
          </Route>
          <Route path="/login" element={<div>this login page</div>} />
        </Routes>
     </Router> 
  );
}

export default App;
