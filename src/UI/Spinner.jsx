import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'../App'
const Spinner = () => {
  return (
    <div>
       <FontAwesomeIcon icon={faSpinner} className="spinner"/>  
    </div>
  );
}

export default Spinner;
