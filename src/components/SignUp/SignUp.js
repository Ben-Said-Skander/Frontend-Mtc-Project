import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.module.css";
export default function SignUp() {
  const params = useParams();
  const navigate = useNavigate();
  const [FirsName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    let data = { FirsName, LastName, Email, Password };
    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
  };
  return (
    <div>
      <body>

        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-5 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-5 p-sm-5" >

                  <center><h6>Already Member ?    <button type="button" onClick={() => navigate("/SignIn")} className="btn btn-facebook btn-login text-uppercase fw-bold">sign In</button></h6></center>
                  <p className="card-title text-center mb-5 fw-light fs-5">Sign up</p>

                  <form>
                    <div className="form-floating mb-3">

                      <label
                        htmlFor="floatingInput"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={FirsName}
                        placeholder="FirstName"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-3">

                      <label
                        htmlFor="floatingInput"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={LastName}
                        placeholder="LastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />

                    </div>
                    <div className="form-floating mb-3">
                      <input type="date" className="form-control"/>

                    </div>
                    <div className="form-floating mb-3">
                      <label htmlFor="floatingInput">Email address</label>
                      <input type="Email" className="form-control" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="form-floating mb-3">

                      <label htmlFor="floatingPassword">Password</label>
                      <input type="Password" className="form-control" id="floatingPassword" value={Password} placeholder="Passwrd" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                    <div className="d-grid">

                      <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleClick} >Register</button>

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
//Code Brahim
/*import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.module.css";

export default function SignUp() {
  const params = useParams();
  const navigate = useNavigate();
  const [FirsName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    let data = { FirsName, LastName, Email, Password };
    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
  };
  return (
    <div>

      <body>

        <div class="mw-100">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">

                  <center><h6>Already Member ?    <button type="button" onClick={() => navigate("/SignIn")} className="btn btn-facebook btn-login text-uppercase fw-bold">sign In</button></h6></center>
                  <p className="card-title text-center mb-5 fw-light fs-5">Sign up</p>

                  <form>
                    <div className="form-floating mb-3">

                      <label
                        htmlFor="floatingInput"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={FirsName}
                        placeholder="FirstName"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-3">

                      <label
                        htmlFor="floatingInput"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={LastName}
                        placeholder="LastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />

                    </div>
                    <div className="form-floating mb-3">



                      <input type="date" className="form-control" />

                    </div>
                    <div className="form-floating mb-3">
                      <label htmlFor="floatingInput">Email address</label>
                      <input type="Email" className="form-control" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="form-floating mb-3">

                      <label htmlFor="floatingPassword">Password</label>
                      <input type="Password" className="form-control" id="floatingPassword" value={Password} placeholder="Passwrd" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue
                        id="form2Example3c"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div className="d-grid">

                      <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleClick} >Register</button>

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
*/