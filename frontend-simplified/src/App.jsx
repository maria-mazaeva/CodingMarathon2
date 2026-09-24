import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage"; 
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import LogInPage from "./pages/LogInPage"
import AddUserPage from "./pages/SignUpPage";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  });

return (
  <div>
    <BrowserRouter>
    <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
    />

    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} /> 
        <Route path="/add-job" element={isAuthenticated ?<AddJobPage /> : <Navigate to="/login" /> } />
        <Route path="/edit-job/:id" element={isAuthenticated ? <EditJobPage /> : <Navigate to="/login" />} />
        <Route path="/jobs/:id" element={isAuthenticated ?<JobPage /> : <Navigate to="/login" />} /> 

        <Route path="/signup" element={<AddUserPage setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/login" element={<LogInPage setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="*" element={<NotFoundPage />} />  
    </Routes>
      <ToastContainer/>   
    </BrowserRouter>
  </div> 
);
};

export default App; 

