import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

function App() {



  return (
    <>
      <Navbar />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;



