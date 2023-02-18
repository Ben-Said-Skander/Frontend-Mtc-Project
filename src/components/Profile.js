import React, { useState } from 'react'
import Nav from './Navbar'
const Profile = () => {

   //add State
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [userName, setUserName] = useState("")
   const [email, setEmail] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")
   const [location, setLocation] = useState("")

   const handelClick = () => {
       // list d'objet nom valeur
       let data = {
           firstName:firstName ,
           lastName: lastName,
           username:userName,
           email: email,
           phoneNumber:phoneNumber,
           location:location,

       };

       let settId = JSON.parse(localStorage.getItem("settId") || "1");

       data.id = settId


       let setting = JSON.parse(localStorage.getItem("setting") || "[]");

       setting.push(data)
       console.log(setting);

       localStorage.setItem("setting", JSON.stringify(setting))

       localStorage.setItem("settId", JSON.stringify(settId + 1))





     }
     const changeFirstName = (event) => {

       setFirstName(event.target.value)
     }
     const changeLastName = (event) => {

       setLastName(event.target.value)
     }
     const changeUserName = (event) => {

       setUserName(event.target.value)
     }
     const changeEmail = (event) => {

       setEmail(event.target.value)
     }
     const changephoneNumber= (event) => {

       setPhoneNumber(event.target.value)
     }
     const changeLocation = (event) => {

       setLocation(event.target.value)
     }






  return (


<div class="menu_s">

<div className="wrapper">
  {/*Top menu */}

 <Nav/>
  {/*  profile Setting   */}


<div class="tab-content" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
<div class="title"> <i class='fa fa-cogs icon' id="s" ></i> Profile Settings </div>
<form action="#" id="forum" name="forum" >
  <div className="user-details">
    <div className="input-box">
      <span className="details"> Firstname</span>
      <input type="text" placeholder="Enter Firstname" id="nom" onChange={changeFirstName} />
    </div>
    <div className="input-box">
      <span className="details">Lastname</span>
      <input type="text" placeholder="Enter lastname" id="prénom" onChange={changeLastName}  />
    </div>
    <div className="input-box">
      <span className="details">Username</span>
      <input type="text" placeholder="Enter Username" id="userame" onChange={changeUserName} />
    </div>
    <div className="input-box">
      <span className="details"> Phone Number </span>
      <input type="text" placeholder="Enter Phone Number" id="telephone" onChange={changephoneNumber} />
    </div>
    <div className="input-box">
      <span className="details">Email</span>
      <input type="email" placeholder="Enter Email" id="email" onChange={changeEmail} />
    </div>

    <div className="input-box">
      <span className="details">location</span>
      <input type="text" placeholder="Enter Location" id="adresse"  onChange={changeLocation}/>
    </div>
  </div>



  <div className="button">
  <input id="submit " type="button" value="Update" onClick={handelClick()} /> 
    <input id="restart " type="button" value="Cancel" />
  </div>
</form>
</div>









</div>
</div>


  )
}

export default Profile