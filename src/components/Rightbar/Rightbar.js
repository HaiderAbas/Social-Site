import React from "react";
import "./rightbar.css";
import Gift from "../../assets/images/gift3.jpeg";
import img from "../../assets/images/5.jpg";
import img1 from "../../assets/images/event_speaker2.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img6 from "../../assets/images/t-s-6.jpg";
import image from "../../assets/images/4.jpg";
import Online from "../Online/Online";
import { Users } from "../informationSidebar/Information";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayCounter">
          <img className="barthdayImg" src={Gift} alt="" />
          <span className="birthdayText">
            <b> Zahid</b> and <b> 3 other Brithday </b> today
          </span>
        </div>
        <img className="rightbarAd" src={img} alt="img" />
        <h4 className="rightbarTittle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> City :</span>
            <span className="rightbarInfoValue"> Gilgit</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> From :</span>
            <span className="rightbarInfoValue"> Nagar </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> RelationShip :</span>
            <span className="rightbarInfoValue"> Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightberFollowings">
          <div className="rightbarFollowing">
            <img src={image} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
          <div className="rightbarFollowing">
            <img src={img6} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arsalan </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}

export default Rightbar;
