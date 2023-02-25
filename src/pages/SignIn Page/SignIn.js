import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.module.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState([]);
  const [messagee, setMessage] = useState("");

  const handleClick = () => {
    let data = {
      Email: Email,
      Password: Password,
    };
    console.log(data);
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    let message = "";
    for (let i = 0; i < user.length; i++) {
      if (user[i].Email === Email) {
        if (user[i].Password === Password) {
          message = "2";
          break;
        } else {
          message = "1";
          break;
        }
      } else {
        message = "0";
      }
    }
    console.log(message);
    setMessage(message);
  };
  return (
    <div>
      <body class="-tab">
        <div class="mw-100">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <center>
                    <h6>
                      New member ?{" "}
                      <button
                        type="button"
                        onClick={() => navigate("/SignUp")}
                        className="btn btn-principale btn-login text-uppercase fw-bold"
                      >
                        SignUp
                      </button>
                    </h6>
                  </center>
                  <p className="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </p>

                  <form>
                    <div className="form-floating mb-3">
                      <label htmlFor="floatingInput">Email address</label>
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-3">
                      <label htmlFor="floatingPassword">Password</label>
                      <input
                        type="Password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Passwrd"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                        onClick={handleClick}
                      >
                        Sign In
                      </button>
                    </div>
                    <hr className="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
