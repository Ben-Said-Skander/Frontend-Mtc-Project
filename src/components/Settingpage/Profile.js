import React, { useState } from 'react'
import Nav from './Nav'
import Styles from './MyStyles.module.css';
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

   
<div className={Styles.menu_s}>

<div className={Styles.wrapper}>
  {/*Top menu */}
  
 <Nav/>
  {/*  profile Setting   */}


<div class={Styles.tab_content} id="profile" role="tabpanel" aria-labelledby="profile-tab" >
<div class={Styles.title}>  Profile Settings </div>
<form className={Styles.form} action="#" id="forum"  >
  <div className={Styles.user_details}>
    <div className={Styles.input_box}>
      <span className={Styles.details}> Firstname</span>
      <input className={Styles.input} type="text" placeholder="Enter Firstname" id="nom" onChange={changeFirstName} />
    </div>
    <div className={Styles.input_box}>
      <span className={Styles.details}>Lastname</span>
      <input className={Styles.input} type="text" placeholder="Enter lastname" id="prénom" onChange={changeLastName}  />
    </div>
    <div className={Styles.input_box}>
      <span className={Styles.details}>Username</span>
      <input className={Styles.input} type="text" placeholder="Enter Username" id="userame" onChange={changeUserName} />
    </div>
    <div className={Styles.input_box}>
      <span className={Styles.details}> Phone Number </span>
      <input className={Styles.input} type="text" placeholder="Enter Phone Number" id="telephone" onChange={changephoneNumber} />
    </div>
    <div className={Styles.input_box}>
      <span className={Styles.details}>Email</span>
      <input className={Styles.input} type="email" placeholder="Enter Email" id="email" onChange={changeEmail} />
    </div>
   
    <div className={Styles.input_box}>
      <span className={Styles.details}>location</span>
      <input className={Styles.input} type="text" placeholder="Enter Location" id="adresse"  onChange={changeLocation}/>
    </div>
  </div>
  
  
 
  <div className={Styles.button}>
  <input className={Styles.input} id="submit " type="button" value="Update" onClick={handelClick()} /> 
    <input className={Styles.input} id="restart " type="button" value="Cancel" />
  </div>
</form>
</div>
 








</div>
</div>


  )
}

export default Profile