"use client";
import '../login/login.css'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "login"
}
function Login() {
  const router = useRouter()
  ////////////////////////////////
  const [text, setText] = useState("")
  /////////////////////////////////////////
  const [email, setEmail] = useState("")
  const emailChange = ($e) => {
    setEmail($e.target.value)
  }
  /////////////////////////////////////////
  const [password, setPassword] = useState("")
  const passwordChang = ($e) => {
    setPassword($e.target.value)
  }
  /////////////////////////////////////////
  const click = () => {
    console.log(email, password);

    if (email.length > 5 && password.length > 5) {
      setText("successfully logged in");
      sessionStorage.setItem("email", email)
      sessionStorage.setItem("password", password)
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else { setText(<p style={{ color: "red" }}>login failed!!<p>email and password must be 5 letters</p></p>) }
  };

  return (
    <div className="login-hero" role="main" style={{ margin: "150px 20px 0px 20px", borderRadius: "20px", }}>
      <div className="brand">
        <div className="brand-logo">Ebolt</div>
      </div>

      <div className="card-wrapper">
        <div className="login-card" aria-label="Sign in form">


          <h2 className="card-title">Sign in with email</h2>
          <p className="card-sub">
            Make a new doc to bring your words, data, and teams together. For free.
          </p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label className="input-label">
              <span className="visually-hidden">Email</span>
              <input autoComplete="off" onChange={emailChange} type="email" placeholder="Email" required />
            </label>

            <label className="input-label">
              <span className="visually-hidden">Password</span>
              <input autoComplete="off" onChange={passwordChang} type="password" placeholder="Password" required />
            </label>

            <div className="form-row">
              <button onClick={click} className="btn-primary" type="submit">login</button>
              <a className="forgot" href="#forgot">Forgot password?</a>
            </div>

            <div className="divider"><span>Or sign in with</span></div>
            <div><p style={{ color: "green" }}>{text}</p></div>
            <div className="social">
              <button type="button" className="social-btn">G</button>
              <button type="button" className="social-btn">f</button>
              <button type="button" className="social-btn"></button>
            </div>
          </form>
        </div>
      </div>

      <footer className="login-footer">
        <small>© {new Date().getFullYear()} Ebolt</small>
      </footer>
    </div>
  );
}


export default Login;
