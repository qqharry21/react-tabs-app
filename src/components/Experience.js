/** @format */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';
import TabContainer from './TabContainer';
const url = 'https://course-api.com/react-tabs-project';

function Experience() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await axios.get(url);
    const data = response.data;
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <TabContainer jobs={jobs} value={value} setValue={setValue} />
        {/* job info */}
        <Job data={jobs[value]} />
      </div>
    </section>
  );
}

export default Experience;
