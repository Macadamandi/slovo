import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import {
  Dashboard,
  Dictionary,
  Favorities,
  Sets,
  Auth,
  LearnSet,
} from '../pages';

import './app.css';

function App() {
  return (
    <Router>
      <div className="app container-fluid">
        <div className="row d-flex" style={{ height: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/favorities" element={<Favorities />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/learn" element={<LearnSet />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
