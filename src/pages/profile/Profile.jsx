import React, { useState, useEffect } from 'react';
import Topbar from '../../components/topbar/Topbar';

import './Profile.css';
import Rightbar from '../../components/rightbar/Rightbar';
import Timeline from '../../components/timeline/Timeline';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/sidbar/Sidebar';


const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const feachUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
      console.log(username);
    };
    feachUser();
  }, []);

  const PUBLICK_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src={PUBLICK_FOLDER + '/post/3.jpeg'}
                alt=''
                className='profileCoverImg'
              />

              <img
                src={
                  user.profilePicture || PUBLICK_FOLDER + '/person/noAvatar.png'
                }
                alt=''
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Timeline username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
