import AdminSideBar from '../../components/AdminSideBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenteeList = () => {
    const [mentees, setMentees] = useState([]);

    useEffect(() => {
        const fetchMentees = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/mentees/mentee-list/');
                setMentees(response.data);
            } catch (error) {
                console.error('Error fetching mentees:', error);
            }
        };

        fetchMentees();
    }, []);

    const handleBanClick = async (menteeId) => {
        try {
            await axios.put(`http://localhost:8000/api/mentees/${menteeId}/block/`);
            setMentees(prevMentees => prevMentees.map(mentee => {
                if (mentee.id === menteeId) {
                    return { ...mentee, is_blocked: !mentee.is_blocked };
                }
                return mentee;
            }));
        } catch (error) {
            console.error('Error blocking mentee:', error);
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
                            <h4 className="text-white">List Of Mentees</h4>
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
                                    {mentees.map((mentee, index) => (
                                        <tr key={mentee.id}>
                                            <td>{index + 1}</td>
                                            <td>{mentee.first_name} {mentee.last_name}</td>
                                            <td>{mentee.email}</td>
                                            <td>{mentee.country}</td>
                                            <td>{mentee.is_verified ? 'Yes' : 'No'}</td>
                                            <td>
                                                {mentee.is_blocked ? (
                                                    <button className="btn btn-success" onClick={() => handleBanClick(mentee.id)}>Unban</button>
                                                ) : (
                                                    <button className="btn btn-danger" onClick={() => handleBanClick(mentee.id)}>Ban</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenteeList;
