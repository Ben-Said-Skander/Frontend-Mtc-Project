import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaEnvelope, FaBan, FaBirthdayCake ,FaPhoneAlt} from "react-icons/fa";
export default function SignUp() {
  const params = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  //const [public_id, setpublic_id] = useState("");
  const [role, setrole] = useState("");
  //const [resetPasswordToken, setResetPasswordToken] = useState("");
  //const [resetPasswordExpire, setResetPasswordExpire] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3500/User/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));

      
  }, []);
  /* const handleClick = () => {
    let data = { FirsName, LastName, Email, Password };
    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
  };*/
  /*
 the elements exist in each document in the data
firstName: String,
lastName: String,
userName: String,
password: String,
telephone: Number,
email: String,
dateOfBirth: String,
gender: String,
avatar.public_id,
avatar.role
   resetPasswordToken: String,
   resetPasswordExpire: Date*/
  const handleClick = (event) => {
    //console.log("date : ",dateOfBirth)
   // console.log("role : ",role)
    let data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      telephone:parseInt(telephone) ,
      email: email,
      dateOfBirth: dateOfBirth,
      gender: gender,
    //  avater: { public_id: public_id, role: role },
      role:role
    //  resetPasswordToken: resetPasswordToken,
    //  resetPasswordExpire: resetPasswordExpire,
    };

    let exist = false; //to check if the user exist or ont
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        console.log("mail");
        alert("email used try again"); // message user exists
        navigate("/SignUp/");
        exist = true;
      }
      if (exist == true) {
        break;
      }
    }
    if (exist == false) {
      // if user is not existed, we will add them to the data : User
      axios
        .post("http://localhost:3500/User/", data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios
        .get("http://localhost:3500/User/")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => console.log(err));
         navigate("/SignIn")

    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <center>
                        <h6>
                          Already Member ?{" "}
                          <button
                            type="button"
                            onClick={() => navigate("/SignIn")}
                            className="btn btn-primary"
                          >
                            sign In
                          </button>
                        </h6>
                      </center>
                      <p
                        style={{ color: "#080039" }}
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                      >
                        <p>Sign up</p>
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaUserAlt />
                              </div>
                              <input
                                type="text"
                                style={{ padding: 24 }}
                                className="input form-control"
                                value={firstName}
                                placeholder="FirstName"
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaUserAlt />
                              </div>
                              <input
                                type="text"
                                style={{ padding: 24 }}
                                className="form-control"
                                value={lastName}
                                placeholder="LastName"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaBirthdayCake />
                              </div>
                              <input 
                              style={{ padding: 12 }} 
                              type="date" 
                              onChange={(e) => setDateOfBirth(e.target.value)}/>
                              <div className="form-outline flex-fill mb-0">
                                <select  onChange={(e) => setrole(e.target.value)} style={{ padding: 12 }}>
                                  <option value="student">Student</option>
                                  <option value="instructor">Instructor</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaEnvelope />
                              </div>
                              <input
                                type="Email"
                                style={{ padding: 24 }}
                                className="form-control"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaPhoneAlt />
                              </div>
                              <input
                                type="text"
                                style={{ padding: 24 }}
                                className="form-control"
                                value={telephone}
                                placeholder="Phone Number"
                                onChange={(e) => setTelephone(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <FaBan />
                              </div>
                              <input
                                type="Password"
                                style={{ padding: 24 }}
                                className="form-control"
                                value={password}
                                placeholder="Passwrd"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
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
                            I agree all statements in
                            <a href="#!"> Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={handleClick}
                            className="blue_btn"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
