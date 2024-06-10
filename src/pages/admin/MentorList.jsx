import AdminSideBar from '../../components/AdminSideBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MentorList = () => {
    const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        console.log("insde fetchmnetor")
        const response = await axios.get('http://localhost:8000/api/mentors/mentor-list/');
        setMentors(response.data); // Assuming your mentor data is returned as an array of objects
        console.log(mentors)
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);

  const handleBanClick = async (mentorId) => {
    try {
        console.log(mentorId)
        // Send a request to your backend API to update the mentor status to blocked
        await axios.put(`http://localhost:8000/api/mentors/${mentorId}/block/`);
        
        // After successfully blocking the mentor, update the mentors state to reflect the change
        setMentors(prevMentors => prevMentors.map(mentor => {
            if (mentor.id === mentorId) {
                return { ...mentor, is_blocked: true }; // Assuming you have an is_blocked field in your mentor object
            }
            return mentor;
        }));
    } catch (error) {
        
        console.error('Error blocking mentor:', error);
    }
};
  return (
    <div>
      <br/><br/><br/><br/><br/>
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <AdminSideBar />
        </div>
        <div className='col'>
          <div className="mt-2">
            <h4 className="text-white">List Of Mentors</h4>
            <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Verified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor, index) => (
            <tr key={mentor.id}>
              <td>{index + 1}</td>
              <td>{mentor.first_name} {mentor.last_name}</td>
              <td>{mentor.email}</td>
              <td>{mentor.country}</td>
              <td>{mentor.is_verified ? 'Yes' : 'No'}</td>
              <td>
            {mentor.is_blocked ? (
                <button className="btn btn-success" onClick={() => handleBanClick(mentor.id)}>Unban</button>
            ) : (
                <button className="btn btn-danger" onClick={() => handleBanClick(mentor.id)}>Ban</button>
            )}
        </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div></div>
    </div>
  );
};

export default MentorList;