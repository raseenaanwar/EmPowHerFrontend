import React from 'react';
import AdminSideBar from '../../components/AdminSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminHome from './AdminHome';

const AdminDashboard = () => {
  return (
    <div>
      <br/><br/><br/><br/><br/>
      <div className='container-fluid bg-secondary min-vh-100'> 
        <div className='row'>
          <div className='col-2 bg-white vh-100'>
            <AdminSideBar/>
          </div>
          <div className='col-auto'>

          <AdminHome/> 
          <table className="table caption-top bg-white rounded mt-2">
        <caption className='text-white fs-4'>Recently joined Mentors</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Country</th>
      <th scope="col">Verified</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>USA</td>
      <td>Yes</td>
      <td>
        <button type="button" className="btn btn-danger">Ban</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Canada</td>
      <td>No</td>
      <td>
        <button type="button" className="btn btn-danger">Ban</button>
      </td>
    </tr>
    
  </tbody>
</table>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
