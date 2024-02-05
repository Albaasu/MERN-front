import React from 'react';
import './Post.css';
import { Users } from '../../dummyData';
import { MoreVert } from '@mui/icons-material';

const Post = ({ post }) => {
  // const user = Users.filter((user)=>user.id===1 )

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.filter((user) => user.id === post.id)[0].profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUserName'>
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={post.photo} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='./assets/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>{post.like}がいいねしました</span>
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
