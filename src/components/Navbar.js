// import react from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <nav className="Navbar">
        <header>
            <div className="sticky"> </div>
            <Link to="/Home" className="logo"><img src={logo} alt=""/></Link>
            <ul className="navbar">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Women">Women</Link></li>
                <li><Link to="/Men">Men</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
    
            <div className="navicon">
                <Link to="/"><i className='bx bx-search'></i></Link>    
                <Link to="/user/accountsettings"> <i className='bx bxs-user'></i></Link>    
                <Link to="/cart"> <i className='bx bx-cart'></i></Link>    
        
                <div className="bx bx-menu" id="menuicon"></div>
            </div>    
        </header>
      </nav>
    );
  }
  
  export default Navbar;
