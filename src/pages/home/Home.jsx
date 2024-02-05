import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidbar from '../../components/sidbar/Sidbar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import "./Home.css"

const Home = () => {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>

      <Sidbar />
      <Timeline />
      <Rightbar />
      </div>
    </>
  );
};

export default Home;
