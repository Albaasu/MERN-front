import React from 'react';
const PUBLICK_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;

const Online = ({ user }) => {
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img src={PUBLICK_FOLDER+user.profilePicture} alt='' className='rightbarProfileImg' />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUserName'>{user.username}</span>
    </li>
  );
};

export default Online;
