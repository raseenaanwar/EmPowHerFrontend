import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const MentorSidebar = ({ onMenuItemClick , email }) => {
    const handleClick = (menuItem) => {
        console.log("menuItem:", menuItem);
        if (onMenuItemClick) {
            onMenuItemClick(menuItem);
        }
        console.log("insd sidebar handleclick", menuItem)
    };

    return (
        <>
            <br /><br /><br />
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {/* Sidebar content */}
                <CDBSidebar textColor="#333" backgroundColor='#f0f0f0'>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink exact to={`/general-profile?email=${encodeURIComponent(email)}`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user" onClick={() => handleClick('general-profile')}>General Profile</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/mentor-profile" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user-tie" onClick={() => handleClick('mentor-profile')}>Mentor Profile</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/mentor-profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clock" onClick={() => handleClick('availability')}>Availability</CDBSidebarMenuItem>
 </NavLink>
                            <NavLink exact to="/mentor-sessions" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="list">Mentoring Sessions</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/chat" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="comments">Chat</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    );
};

export default MentorSidebar;
