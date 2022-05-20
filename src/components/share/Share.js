import React from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import img from "../../assets/images/event_speaker4.jpg";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={img} alt="img" />
          <input
            placeholder="what,s in your mind Haider"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Videos</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue"  className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green"  className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>  
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod "  className="shareIcon" />
              <span className="shareOptionText">Felling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
