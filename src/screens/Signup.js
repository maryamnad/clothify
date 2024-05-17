import { useNavigate } from "react-router-dom"
import axios from "axios";
import React from "react";
function SignUpForm() {
  const history = useNavigate();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const sendRequest = async () => {
    const res = await axios.post("http://127.0.0.1:5000/api/signup", {
      Name: state.name,
      Email: state.email,
      Password: state.password
    }).catch(err => console.log(err));
    // const data = await res.data;
    // return data;
  }  

  const handleOnSubmit = evt => {
    evt.preventDefault();
    sendRequest().then(()=> history("/"));

    

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button onClick={handleOnSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;