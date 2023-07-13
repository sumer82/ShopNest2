import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Header />
      <div className="main_container">
        <div className="loginContainer login-center">
          <div className="login loginC">
            <h1>USER SIGN-IN</h1>
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            <form
              // className="Login col-md-8 col-lg-4 col-11"
              onSubmit={submitHandler}
            >
              <div className="inputLoginBox">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputLoginBox">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="submitButton" type="submit">
                Login
              </button>
              <div className="login_text">
                <p>
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="image_container loginIC">
            <img src="/images/login.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
