import React from 'react'
import Nav from './Nav'
import Styles from './MyStyles.module.css';
const Password = () => {
  return (
    <div className={Styles.menu_s}>

    <div className={Styles.wrapper}>
      {/*Top menu */}
      
     <Nav/>
      {/*  profile Setting   */}
      <div className={Styles.tab_content} id="pass" >
    <div className={Styles.title}>  Password Settings </div>
    <form className={Styles.form} action="#" id="forum" name="forum" onsubmit="return verif()">
      <div className={Styles.user_details }>
        <div className={Styles.input_box}>
          <span className={Styles.details}> Old password </span>
          <input className={Styles.input} type="text" placeholder="Old Password" id="oldpassword" onkeyup="this.value=this.value.toUpperCase()" />
        </div>
        <div className={Styles.input_box}>
          <span className={Styles.details}> New password</span>
          <input className={Styles.input} type="text" placeholder=" New Pasword" id="newpassword" onkeyup="this.value=this.value.toUpperCase()" />
        </div>
        <div className={Styles.input_box}>
          <span className={Styles.details}> Confirm password </span>
          <input  className={Styles.input} type="text" placeholder="Confirm password" id="confirm" />
        </div>
        </div>
    <div className={Styles.button}>
        <input className={Styles.input} id="submit " type="button" value="Update"  /> 
        <input className={Styles.input} id="restart " type="button" value="Cancel" />
      
      </div>
    </form>
    
    
     
    
    
    
    
    
    
    
    </div>
    </div>
        </div>

   
  )
}

export default Password