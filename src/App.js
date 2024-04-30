import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import BMICalc from './screens/BMICalc';
import Toast from './components/Notifications/Toast';
import Appointments from './screens/Appointments';
import Patients from './screens/Patients/Patients';
import Settings from './screens/Settings';
import PatientProfile from './screens/Patients/PatientProfile';
import CreatePatient from './screens/Patients/CreatePatient';
import Doctors from './screens/Doctors/Doctors';
import DoctorProfile from './screens/Doctors/DoctorProfile';
import Receptionists from './screens/Receptionists';
import NotFound from './screens/NotFound';
import Login from './screens/Login';


function App() {
  Aos.init();

  return (
    <>
      {/* Toaster */}
      <Toast />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BMICalc/>} />
    
          {/* patient */}
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/preview/:id" element={<PatientProfile />} />
          <Route path="/patients/create" element={<CreatePatient />} />
          {/* doctors */}
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/preview/:id" element={<DoctorProfile />} />
          {/* receptionists */}
          <Route path="/receptionists" element={<Receptionists />} />
          {/* others */}
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
