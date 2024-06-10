import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfileMentorPage from './pages/mentor/MentorDashboard';
import VerifyEmail from './pages/VerifyEmail';
import ForgetPassword from './pages/ForgetPassword';
import MenteeDashboard from './pages/MenteeDashboard';
import MentorDashboard from './pages/mentor/MentorDashboard';
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import CustomNavbar from './components/CustomNavbar';
import AxiosInstance from './axiosinstance';
import MentoringSessionsPage from './pages/mentor/MentoringSessionsPage';
import MentorChatPage from './pages/mentor/MentorChatPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import MentorList from './pages/admin/MentorList';
import MenteeList from './pages/admin/MenteeList';
import AdminSideBar from './components/AdminSideBar';
import WellWisherList from './pages/admin/WellWisherList';
import GeneralProfile from './pages/mentor/GeneralProfile';
import MentorProfile from './pages/mentor/MentorProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = () => {
      return localStorage.getItem('token') !== null;
    };

    setIsLoggedIn(isAuthenticated());
  }, []); // Run this effect only once after the initial render

  const handleLogout = () => {
    // Perform logout logic
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <CustomNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/otp/verify" element={<VerifyEmail />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/login" element={<LoginPage onLogin={setIsLoggedIn} />} />

          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="/password-reset-confirm/:uid/:token" element={<ResetPassword />} />
          <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          {/* <Route path="/general-profile" element={<GeneralProfile />} /> */}
          <Route
  path="/general-profile"
  element={<GeneralProfile  />}
/>

          <Route path="/mentor-profile" element={<MentorProfile />} />
          <Route path="/mentor-sessions" element={<MentoringSessionsPage/>} />
          <Route path="/chat" element={<MentorChatPage/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/mentor-list" element={<MentorList/>}/>
          <Route path="/mentee-list" element={<MenteeList/>}/>
          <Route path="/wellwisher-list" element={<WellWisherList/>}/>
          

} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
