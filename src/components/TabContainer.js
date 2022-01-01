/** @format */

import React from 'react';

function TabContainer({ jobs, value, setValue }) {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          key={index}
          className={`job-btn ${index === value ? 'active-btn' : ''}`}
          onClick={() => setValue(index)}>
          {job.company}
        </button>
      ))}
    </div>
  );
}

export default TabContainer;
