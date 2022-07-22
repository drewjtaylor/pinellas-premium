import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Landscaping from './pages/Landscaping';
import LawnMaintenance from './pages/LawnMaintenance';
import OtherServices from './pages/OtherServices';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='landscaping' element={<Landscaping/>}/>
            <Route path='lawnmaintenance' element={<LawnMaintenance/>}/>
            <Route path='otherservices' element={<OtherServices/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
