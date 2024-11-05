import { useState } from 'react';
import '../ProfileSideMenu/ProfileSideMenu.css';

function ProfileSideMenu() {
  const profileSideMenu =["Basic Information","Specialization","Lawyer Team",
    "Reviews","Case Information","financial information","Communication","Documents "]
  const[selectedItem,setSelectedItem]=useState(profileSideMenu[0]);

  return (
    <div className="nav">
      <div className="profileItemWrapper">
        {profileSideMenu.map((item, index) => (
          <p className='profileItem' key={index}>{item}</p>
        ))}    
      </div>
      <div class="vl"></div>
    </div>
  );
}

export default ProfileSideMenu;