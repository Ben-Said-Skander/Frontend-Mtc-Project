import React from "react";
import Nav from "../../../components/nav";
const Password = () => {
  return (
    <div class="menu_s">
      <div className="wrapper">
        {/*Top menu */}

        <Nav />
        {/*  profile Setting   */}
        <div class="tab-content" id="pass">
          <div class="title">
            {" "}
            <i class="fa fa-cogs icon" id="s"></i> Password Settings{" "}
          </div>
          <form action="#" id="forum" name="forum" onsubmit="return verif()">
            <div className="user-details">
              <div className="input-box">
                <span className="details"> Old password </span>
                <input
                  type="text"
                  placeholder="Old Password"
                  id="oldpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className="input-box">
                <span className="details"> New password</span>
                <input
                  type="text"
                  placeholder=" New Pasword"
                  id="newpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className="input-box">
                <span className="details"> Confirm password </span>
                <input
                  type="text"
                  placeholder="Confirm password"
                  id="confirm"
                />
              </div>
            </div>
            <div className="button">
              <input id="submit " type="button" value="Update" />
              <input id="restart " type="button" value="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
