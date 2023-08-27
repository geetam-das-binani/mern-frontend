import React, { Fragment, useState, useRef } from "react";
import "./LoginSignup.css";
import Loader from "../layout/loader/Loader";
import { useNavigate } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';

import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Link } from "react-router-dom";
export default function LoginSignup() {
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const loginSubmit=(e)=>{
    e.preventDefault()
    console.log('form submitted');
  }
  const switchTabs = (e, tab) => {
    if (tab === "login") {
           switcherTab.current.classList.add('shift__to__neutral')
           switcherTab.current.classList.remove('shift__to__right')
           registerTab.current.classList.remove('shift__to__neutral__form')
           registerTab.current.classList.remove('shift__to__left')
        
    }
    if (tab === "register") {
        switcherTab.current.classList.add('shift__to__right')
        switcherTab.current.classList.remove('shift__to__neutral')
        registerTab.current.classList.add('shift__to__neutral__form')
        registerTab.current.classList.add('shift__to__left')
    }
  };
  return (
    <Fragment>
      <div className="login__signUp__container">
        <div className="login__signUp__box">
          <div>
            <div className="login__signUp__toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form ref={loginTab} className="login__form" onSubmit={loginSubmit}>
            <div className="login__email">
                <MailOutlineIcon/>
              <input
                type="email"
                placeholder="email"
                required
                value={loginEmail}
                onChange={({ target }) => setLoginEmail(target.value)}
              />
            </div>

            <div className="login__password">
                <LockIcon />
              <input
                type="password"
                placeholder="password"
                required
                value={loginPassword}
                onChange={({ target }) => setLoginPassword(target.value)}
              />
            </div>
            <Link to="/password/forget">Forgot Password ?</Link>
            <input type="submit" value="login" className="login__btn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
