import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/LandingPage/Landing_Page';
import Sign_Up from './Components/SignUp/Sign_Up';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch'; // Adjust the path appropriately
import DoctorCard from './Components/DoctorCard/DoctorCard';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ProfileDropdown from './Components/ProfileDropdown/ProfileDropdown';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
            <Routes>
              <Route path="/" element={<Landing_Page />} />
              <Route path="/SignUp" element={<Sign_Up />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/FindDoctorsearch" element={<FindDoctorSearch />} />
              <Route path="/Appointments" element={<AppointmentForm />} />
              <Route path="/DoctorCard" element={<DoctorCard />} />
              <Route path="/ReviewForm" element={<ReviewForm />} />
              <Route path="ProfileCard" element={<ProfileCard />} />
              <Route path="ProfileDropDown" element={<ProfileDropdown />} />
            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;
