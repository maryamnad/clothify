import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm() {
  const history = useNavigate();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "user" // default role is user
  });

  const handleChange = (evt) => {
    const value = evt.target.type === 'radio' ? evt.target.value : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/signup", {
        Name: state.name,
        Email: state.email,
        Password: state.password,
        Role: state.role
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    sendRequest().then(() => history("/login"));

    const { name, email, password, role } = state;
    alert(
      `You are signed up with name: ${name}, email: ${email}, password: ${password}, role: ${role}`
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="radio"
            name="role"
            value="user"
            checked={state.role === "user"}
            onChange={handleChange}
          />
          <label style={{ marginRight: '10px' }}>User</label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={state.role === "admin"}
            onChange={handleChange}
          />
          <label>Admin</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
