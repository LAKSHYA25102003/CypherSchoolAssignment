import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import SideBar from './Components/BasicLayouts/SideBar';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import { Toaster } from 'react-hot-toast';
import Profile from './Pages/Profile';

// import { Home } from '@mui/icons-material';

function App() {
  return (
    <>
    <Toaster />
    <Router>
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        {/* <Route path='/verify-account' element={<LoginOtp />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/set-new-password/:token' element={<SetNewPassword />}></Route>
        <Route path='/create-password/:token' element={<CreateNewPassword />}></Route> */} 
      </Routes>
    </Router>
    </>
  );
}

export default App;
