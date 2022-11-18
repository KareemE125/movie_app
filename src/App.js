import './App.css';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  return <>
    <NavBar/>
    <Outlet></Outlet>
    <Footer/>
  </>
}

export default App;
