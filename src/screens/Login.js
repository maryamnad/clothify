import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store"
function SignInForm() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [state, setState] = React.useState({
    Email: "",
    Password: ""
  });

  const [data,setdata]=React.useState([])
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(state)
  };

  
  
  
  const sendRequest = async () => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/api/login", {
            Email: state.Email,
            Password: state.Password
        });
        const { message, user, token } = res.data;
        setdata(user);
        console.log(data)
        const { Email, Password } = state;
        alert(`You are login with email: ${Email} and password: ${Password}`);
        dispatch(authActions.login(user));
        console.log(user)
        history("/user");
    } catch (err) {
      alert("Incorrect Email or Password");
      
    }
}
  const handleOnSubmit = (e) => {
    e.preventDefault();
    

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
    sendRequest()
    
  };

  

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          name="Email"
          value={state.Email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="Password"
          value={state.Password}
          onChange={handleChange}
          placeholder="Password"
        />
        <a href="#">Forgot your password?</a>
        <button >Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;