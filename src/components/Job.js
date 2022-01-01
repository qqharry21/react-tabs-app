/** @format */

import React from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

function Job({ data }) {
  const { company, dates, duties, title } = data;
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty, index) => (
        <div className='job-desc' key={index}>
          <FaAngleDoubleRight className='job-icon' />
          <p>{duty}</p>
        </div>
      ))}
    </article>
  );
}

export default Job;
