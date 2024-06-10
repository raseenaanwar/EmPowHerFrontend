import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import '../css/adminstyle.css'
const AdminSideBar = () => {
    const [active,setActive]=useState(1);
  return (
    <div className='bg-white sidebar p-3'>
      <div className='m-2'>
      <i className='bi bi-speedometer fs-4 me-3'></i>
        <span className='brand-name fs-3'>Dashboard</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        
        <a className='list-group-item py-2'>
        <Link to="/admin-dashboard" className='list-group-item py-2'>
          <i className='bi bi-house fs-4 me-3'></i>
          <span className={active===1? 'active fs-5 ':'fs-5'} onClick={e=>setActive(1)}>
            Home</span>
            </Link>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-bar-chart-line fs-4 me-3'></i>
          <span className={active===2? 'active fs-5 ':'fs-5'} onClick={e=>setActive(2)}>
          
            Overview</span>
        </a>
        <a className='list-group-item py-2'>
        <Link to="/mentor-list" className='list-group-item py-2'>
          <i className='bi bi-person fs-4 me-3'></i>
          <span className={active===3? 'active fs-5 ':'fs-5'} onClick={e=>setActive(3)}>
          
            Mentors</span></Link>
        </a>
        <a className='list-group-item py-2'>
        <Link to="/mentee-list" className='list-group-item py-2'>
          <i className='bi bi-people fs-4 me-3'></i>
          <span className={active===4 ? 'active fs-5 ':'fs-5'} onClick={e=>setActive(4)}>
          
            Mentees</span>
            </Link>
        </a>
        <a className='list-group-item py-2'>
        <Link to="/wellwisher-list" className='list-group-item py-2'>
          <i className='bi bi-people fs-4 me-3'></i>
          <span className={active===5? 'active fs-5 ':'fs-5'} onClick={e=>setActive(5)}>
          
            Wellwishers</span></Link>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-cash fs-4 me-3'></i>
          <span className={active===6? 'active fs-5 ':'fs-5'} onClick={e=>setActive(6)}>
          
            Donations</span>
        </a>
      </div>
    </div>
  );
};

export default AdminSideBar;
