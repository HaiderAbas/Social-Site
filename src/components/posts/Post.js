import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import liked from "../../assets/images/l1.png";
import heart from "../../assets/images/h2.png";
import { Users } from "../informationSidebar/Information";
function Posts({ post }) {
  console.log(post.Like);
  const [like, setLike] = useState(post.Like);
  const [islike, setIsLike] = useState("");
  const [likeCount, setlikeCount] = useState(like);
  const heandleLike = () => {
    islike === "" ? setIsLike(true) : setIsLike(false);
    if(islike === ""){
      setlikeCount(like+1)
      setIsLike(true)
      setLike(false)
    }
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((x) => x.id === post.userId)[0].Picture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((x) => x.id === post.userId)[0].username}
            </span>
            <span className="postData">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="poatCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} className="postImg" alt="image" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={liked}
              onClick={heandleLike}
              alt="img"
            />
            <img
              className="likeIcon"
              src={heart}
              onClick={heandleLike}
              alt="img"
            />
            <span className="postLikeCounter">
              {islike === '' ? like : likeCount} People liked
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.Comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
