import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "./../components/Header";

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <Header />
      <div className="main_container">
        <div className="loginContainer  login-center">
          <div className="image_container signupC">
            <img src="/images/login.png" alt="" />
          </div>
          <div className="login loginC">
            <h1>USER SIGN-UP</h1>
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}

            <form
              //className="Login col-md-8 col-lg-4 col-11"
              onSubmit={submitHandler}
            >
              <div className="inputLoginBox">
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                Register
              </button>
              <div className="login_text">
                <p>
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  >
                    I Have Account <strong>Login</strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
