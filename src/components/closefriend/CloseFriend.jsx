import React from 'react';

const CloseFriend = ({ user }) => {
  const PUBLICK_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;
  return (
    <li className='sidebarFriend'>
      <img src={PUBLICK_FOLDER+user.profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
