import React, { useState } from 'react'
import Nav from './Nav'
import styles from './styles.module.css';
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

   
<div className={styles.menu_s}>

<div className={styles.wrapper}>
  {/*Top menu */}
  
 <Nav/>
  {/*  profile Setting   */}


<div class={styles.tab_content} id="profile" role="tabpanel" aria-labelledby="profile-tab" >
<div class={styles.title}>  Profile Settings </div>
<form className={styles.form} action="#" id="forum"  >
  <div className={styles.user_details}>
    <div className={styles.input_box}>
      <span className={styles.details}> Firstname</span>
      <input className={styles.input} type="text" placeholder="Enter Firstname" id="nom" onChange={changeFirstName} />
    </div>
    <div className={styles.input_box}>
      <span className={styles.details}>Lastname</span>
      <input className={styles.input} type="text" placeholder="Enter lastname" id="prénom" onChange={changeLastName}  />
    </div>
    <div className={styles.input_box}>
      <span className={styles.details}>Username</span>
      <input className={styles.input} type="text" placeholder="Enter Username" id="userame" onChange={changeUserName} />
    </div>
    <div className={styles.input_box}>
      <span className={styles.details}> Phone Number </span>
      <input className={styles.input} type="text" placeholder="Enter Phone Number" id="telephone" onChange={changephoneNumber} />
    </div>
    <div className={styles.input_box}>
      <span className={styles.details}>Email</span>
      <input className={styles.input} type="email" placeholder="Enter Email" id="email" onChange={changeEmail} />
    </div>
   
    <div className={styles.input_box}>
      <span className={styles.details}>location</span>
      <input className={styles.input} type="text" placeholder="Enter Location" id="adresse"  onChange={changeLocation}/>
    </div>
  </div>
  
  
 
  <div className={styles.button}>
  <input className={styles.input} id="submit " type="button" value="Update" onClick={handelClick()} /> 
    <input className={styles.input} id="restart " type="button" value="Cancel" />
  </div>
</form>
</div>
 








</div>
</div>


  )
}

export default Profile