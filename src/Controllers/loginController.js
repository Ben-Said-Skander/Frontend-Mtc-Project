import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorHandler, setErrorHandler] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        Headers: {
          "content-type": "application/json",
        },
      };
      const url = "http://127.0.0.1:3004/login";
      const { data } = await axios.post(
        url,
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      if (error.response.status == 500) {
        navigate("/logout");
      }
    }
  };
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="Email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="Password"
                    name="password"
                    className="form-control"
                    placeholder="Passwrd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary py-3 px-5">
                    login
                  </button>
                </div>
                {/* <label>{messagee==="1"?}</label> */}
              </form>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
