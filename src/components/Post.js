import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-actions">
        <button className="action-button">Like</button>
        <button className="action-button">Comment</button>
        <button className="action-button">Share</button>
      </div>
    </div>
  );
}

export default Post;
