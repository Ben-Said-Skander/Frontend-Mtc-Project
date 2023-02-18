import React from "react";

const Sidebar = () => {

  return (
  
      <div>
        <div class="sidebar">
          {/*profile image & text*/}
  
          <div class="profile">
            <img src="assets/images/pro.png" alt="img" />
            <h3>Username</h3>
            <p>BIO</p>
          </div>
  
          {/*menu item*/}
          <Link to="/Settings/Profile" class="nav">
            {" "}
            <i class="fa fa-user"></i>
            <span>Dashbord</span>
          </Link>
  
          <Link to="/Settings/Password" class="nav">
            <i class="fa fa-key"></i>
            <span>Password</span>
          </Link>
  
          <Link to="/Settings/Interests" class="nav">
            <i class="fa fa-thumb-tack"></i>
            <span>Chat</span>
          </Link>
  
          <div class="logout">
            {" "}
            <i class="fa fa-sign-out "></i>
            <span>Note and Reminders</span>{" "}
          </div>
        </div>
      </div>
    );
};

export default Sidebar;

       
