import { Chat, Notifications, Search } from '@mui/icons-material';
import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const PUBLICK_FOLDER = process.env.REACT_APP_PUBLICK_FOLDER;
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to="/" style={{textDecoration:"none"}}>

        <span className='logo'>MERN:SNS</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <Search className='searchIcon' />
          <input
            type='text'
            className='searchInput'
            placeholder='探しものはなんですか？'
          ></input>
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarItemIcons'>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>2</span>
          </div>
          <img src={PUBLICK_FOLDER+'/person/1.jpeg'} alt='' className='topbarImg' />
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
