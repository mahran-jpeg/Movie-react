import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HomeMovies from '../components/HomeMovies';

const HomePage = () => {
  return (
  <>
   <div className="app__container">
            <Sidebar  />
            <div className="app__container__right">
              <Header />
              <HomeMovies />
            </div>
          </div>
  </>
  );
}

export default HomePage;
