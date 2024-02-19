import React, { useEffect, useState } from 'react';
import './Post.css';
import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.lenght);
  const PUBLICK_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;
  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    const feachUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response.data);
    };
    feachUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


  
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture || PUBLICK_FOLDER + '/person/noAvatar.png'
              }
              alt=''
              className='postProfileImg'
              />
              </Link>
            <span className='postUserName'>{user.username}</span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={PUBLICK_FOLDER + post.img} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src={PUBLICK_FOLDER + '/heart.png'}
              alt=''
              className='likeIcon'
              onClick={() => handleLike()}
            />
            <span className='postLikeCounter'>{like}人がいいねしました</span>
          </div>
          <div className='postBottomRight'>
            <span className='PostCommentText'>{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
