import React from "react";
import Feed from "../../components/feed/Feed.js";
import Rightbar from "../../components/Rightbar/Rightbar.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Topbar from "../../components/topbar/Topbar.js";
import Image from "../../assets/images/6.jpg";
import img from "../../assets/images/5.jpg";
import "./profile.css";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={Image} alt="image" />
              <img className="profileUserImg" src={img} alt="image" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Tecnologies </h4>
                <span className="profileInfoDescription">Hello Friends! </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar  profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
