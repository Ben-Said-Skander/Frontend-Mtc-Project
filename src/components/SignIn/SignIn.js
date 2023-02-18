import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {    
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[message,setMessage]=useState("");
    const [error, setError]= useState(false);
    const [errorHandler, setErrorHandler]= useState(false);    
  const [redirect, setRedirect]= useState(false);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
          const config={
            Headers:{
            "content-type":"application/json",
          },
        };
        const url='http://127.0.0.1:3004/login';
        const {data}=await axios.post(url,{
          email,
          password,
        },config);
        localStorage.setItem('user',JSON.stringify(data));
        
      }catch(error){                   
        if(error.response && error.response.status >=400 && error.response.status <= 500){
          setError(error.response.data.message);
        }
        if(error.response.status==500){        
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
                                    <input type="Email" className="form-control" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="Password" name='password' className="form-control" placeholder="Passwrd" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>


                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary py-3 px-5" >login</button>
                                </div>
                                {/* <label>{messagee==="1"?}</label> */}
                            </form>

                        </div>
                        {error && <p style={{color:'red'}}>{error}</p>}
                    </div>
                </div>
            </div>
    </div>
  )
}
//Code Brahim
/*import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
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
        }
        console.log(data)
        let user = JSON.parse(localStorage.getItem("user") || "[]")
        let message = ""
        for (let i = 0; i < user.length; i++) {
            if (user[i].Email === Email) {
                if (user[i].Password === Password) {
                    message = "2";
                    break;
                } else { message = "1"; break; }
            }
            else {
                message = "0"

            }



        }; console.log(message);
        setMessage(message);
    }
    return (
        <div >
            <body class="-tab" >

                <div class="mw-100" >
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <center><h6>New member ?    <button type="button" onClick={() => navigate("/SignUp")} className="btn btn-principale btn-login text-uppercase fw-bold" >SignUp</button></h6></center>
                                    <p className="card-title text-center mb-5 fw-light fs-5">Sign In</p>

                                    <form>
                                        <div className="form-floating mb-3">
                                            <label htmlFor="floatingInput">Email address</label>
                                            <input type="Email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                                        </div>
                                        <div className="form-floating mb-3">

                                            <label htmlFor="floatingPassword">Password</label>
                                            <input type="Password" className="form-control" id="floatingPassword" placeholder="Passwrd" onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
                                            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div className="d-grid">

                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleClick} >Sign In</button>
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
    )
}*/ 