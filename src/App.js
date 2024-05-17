
import Login from './screens/sign.js'
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './screens/About'
import Terms from './screens/Terms'
import Privacy from './screens/Policy'
import UserProfile from './screens/User/UserProfile'
import Admin from './admin/index'
import { BrowserRouter } from 'react-router-dom'

import { useSelector } from 'react-redux';
import Cart from './screens/Cart.js'

import './App.css'

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log("isLoggedIn : " , isLoggedIn);
  return (
    
    <Router>
      <div className='app'>
        <Routes>
        <Route path='/' element={<Login />}/>
            {isLoggedIn && <Route path='/user' element={<Home />} />}{" "} 
          
          {/* <Route exact path="/" element={<Home/>}/> */}

          <Route exact path="/Home" element={<Home/>}/>

          <Route exact path="/About" element={<About/>}/>

          <Route exact path="/Terms" element={<Terms/>}/>

          <Route exact path="/Privacy" element={<Privacy/>}/>

          <Route exact path='/user/:activepage' element={<UserProfile/>}/>
          
          <Route exact path='/cart' element={<Cart/>}/>

          
        </Routes>
        
      </div>
    </Router>
    // <BrowserRouter><Admin/></BrowserRouter>
    
  );
}


export default App;
