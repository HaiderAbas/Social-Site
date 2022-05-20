import React from "react";
import Posts from "../posts/Post";
import Share from "../share/Share";
import "./feed.css";
import { posts } from "../informationSidebar/Information";
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(
          <Posts key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
