import React from 'react';
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faCrown } from '@fortawesome/free-solid-svg-icons/faCrown';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const PlansPage = () => {
  return (
   <>
   <div className="app__container">
      <Sidebar />
     
      <div className="app__container__right">
  <header>
    <h1 className='planPage__header'>Choose Your Plan</h1>
  </header>
  <section className="plans">
    <div className="plan">
      <div className="plan__header">
        <FontAwesomeIcon icon={faStar} className=' plan__icon'/>
        <h2>Basic Plan</h2>
      </div>
      <p className="price">$9.99/month</p>
      <ul className='plans__links'>
        <li className ="plans__link" > Access to SD movies</li>
        <li className ="plans__link">Limited ads</li> 
        <li  className ="plans__link">One device at a time</li>
        <li className ="plans__link">Access to a limited library</li>
      </ul>
      <button className='plan__button'>Subscribe</button>
    </div>
    <div className="plan">
      <div className="plan__header">
        <FontAwesomeIcon icon={faCrown} className=' plan__icon'/>
        <h2>Standard Plan</h2>
      </div>
      <p className="price">$13.99/month</p>
      <ul className='plans__links'>
        <li className ="plans__link">Access to HD movies</li>
        <li className ="plans__link">Two devices at a time</li>
        <li className ="plans__link">Ad-free viewing</li>
        <li className ="plans__link">Access to a broader library</li>
        <li className ="plans__link">Offline downloads</li>
      </ul>
      <button className='plan__button'>Subscribe</button>
    </div>
    <div className="plan">
      <div className="plan__header">
      <FontAwesomeIcon icon={faTrophy} className='plan__icon'/>
        <h2>Premium Plan</h2>
      </div>
      <p className="price">$17.99/month</p>
      <ul className='plans__links'>
        <li className='plans__link'>Access to UHD/4K movies</li>
        <li className='plans__link'>Four devices at a time</li>
        <li className='plans__link'>Ad-free viewing</li>
        <li className='plans__link'>Access to the full library</li>
        <li className='plans__link'>Offline downloads</li>
        <li className='plans__link' > Exclusive content</li>
      </ul>
      <button className='plan__button'>Subscribe</button>
    </div>
    <div className="plan">
      <div className="plan__header">
      <FontAwesomeIcon icon={faUser} className='plan__icon'/>
        <i className="fas fa-users plan__icon"></i>
        <h2>Family Plan</h2>
      </div>
      <p className="price">$22.99/month</p>
      <ul className='plans__links'>
        <li className='plans__link'>Access to HD and UHD movies</li>
        <li className='plans__link'>Six devices at a time</li>
        <li className='plans__link'>Ad-free viewing</li>
        <li className='plans__link'>Access to the full library</li>
        <li className='plans__link'>Offline downloads</li>
        <li className='plans__link'>Kid-friendly content and parental controls</li>
        <li className='plans__link'>Profiles for each family member</li>
      </ul>
      <button className='plan__button'>Subscribe</button>
    </div>
  </section>
</div>
      </div>
   
   </>
  );
}

export default PlansPage;
