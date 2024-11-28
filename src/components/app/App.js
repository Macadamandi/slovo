import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from '../navbar/Navbar';
import {Dashboard, Dictionary, Favorities, Sets} from '../pages';
import { AuthService } from '../../services/firebase/authService';

import './app.css';


function App() {
  return (
    <Router>
      <div className="app container-fluid">
        <div className="row d-flex" style={{height: '100vh'}}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/auth" element={<AuthService/>}/>
            <Route path="/sets" element={<Sets/>}/>
            <Route path="/favorities" element={<Favorities/>}/>
            <Route path="/dictionary" element={<Dictionary/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;