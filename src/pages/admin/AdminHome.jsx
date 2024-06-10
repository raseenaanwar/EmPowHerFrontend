import React from 'react';

const AdminHome = () => {
  return (
    <div className='p-3 bg-light'>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 bg-light'>
            <div className='d-flex  p-4justify-content-between  p-4 align-items-center bg-white border'>
            <i className='bi bi-person-plus-fill p-3 fs-1'></i>
              <div>
                <span>Mentors</span>
                <h2>29</h2>
              </div>
              
            </div>
          </div>
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center'>
              <div>
                <h3 className='fs-2'>10</h3>
                <p className='fs-5'>Mentees</p>
              </div>
              <i className='bi bi-people-fill p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3 p-2'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center'>
              <div>
                <h3 className='fs-2'>20</h3>
                <p className='fs-5'>Well wishers</p>
              </div>
              <i className='bi bi-heart-fill p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
