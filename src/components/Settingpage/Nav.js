import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './MyStyles.module.css';
const Nav = () => {
  return (
    <div>
 <div className={Styles.sidebar}>
    {/*profile image & text*/}
  

      
    <div className={Styles.profile}>
                <img className={Styles.img} src=" " alt="img"/>
                <h3 className={Styles.h3}>Username</h3>
                <p className={Styles.p}>BIO</p>
            </div>

    {/*menu item*/}
    <Link to="/" className={Styles.a}> <i className={Styles.i + ' ' + 'fa fa-user'} ></i><span>profile</span></Link>
    <Link to="/Password"className={Styles.a}><i className={Styles.i + ' ' + 'fa fa-key'}></i><span>password</span></Link>
    <Link to="/Interests" className={Styles.a}><i className={Styles.i + ' ' + 'fa fa-thumb-tack'} ></i><span>interests</span></Link>
      
    <div className={Styles.logout}>  <i className={Styles.i + ' ' +'fa fa-sign-out'}></i><span>Logout</span> </div>










  </div>

    </div>
  )
}

export default Nav
