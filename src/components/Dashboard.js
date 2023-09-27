import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server (replace with your API endpoint)
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
