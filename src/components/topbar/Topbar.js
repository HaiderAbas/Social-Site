import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import Image from "../../assets/images/image.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">NorthAims</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search" className="SearchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div>
          <span className="topbarLink"> Homepage</span>
          <span className="topbarLink"> TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">3</span>
          </div>
          <div>
            <img src={Image} alt="img" className="topImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
