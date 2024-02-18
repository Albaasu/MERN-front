import React, { useEffect, useState } from 'react';
import './Timeline.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
// import{Posts}from "../../dummyData"

const Timeline = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const feachPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/65b6305a167b39eb9bf57c8e');
      setPosts(response.data);
    };
    feachPosts();
  }, [username]);
  return (
    <div className='timeLine'>
      <div className='timeLineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
