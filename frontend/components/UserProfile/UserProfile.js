import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import { fetchUserData } from '../../api';
import '../UserProfile/UserProfile.css';
import ProfileSideMenu from '../ProfileSideMenu/ProfileSideMenu';
import Location from '../../icons/Location';
import PhoneNumber from '../../icons/PhoneNumber';
import Email from '../../icons/Email';
import Star from '../../icons/Star';
import ExternalLink from '../../icons/ExternalLink';
import userImage from '../../images/image.png';

const UserProfile = ({ id }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
          try {
            const data = await fetchUserData(id);
            setUser(data);
          } catch (error) {
            setError('User not found');
          }
        };
        if (id) loadUserData();
      }, [id]);

if (error) return <p>{error}</p>;
if (!user) return <p></p>;

return (
  <div className="flex-center-left">
    <div className="grayRectangle">
      <div className="WhiteRectangle">
        <h5>Profile</h5>
        <p className="profileP">Manage your details and personal preference here</p>
        <div className="profileRectangle">
          <div className="profilesideMenu">
            <ProfileSideMenu />
          </div>  
          <div className="content">   
            <div className="section">
                <h4>Basic Information</h4>
                  <div className="basic-information-section">
                    <div className="rating-section">
                      <div><Image src={userImage} alt="User Image" width={80} height={80} /></div>
                      <div className="title-rating">
                        <div>{user.name}</div>
                        <div className="icon-with-data star-rating"><Star /> {user.rating} Rating</div>
                      </div>
                      <div className="website-linke">
                        <div>website Link</div><ExternalLink />
                      </div>
                    </div>
                    <div className="grey-section location-phone-email-section">
                      <div className="section-data location">
                        <div className="icon-with-data">
                          <Location />
                          <div className="gery-title">Location</div>
                        </div>
                        <div>{user.location}</div>
                      </div>
                      <div className="section-data email">
                        <div className="icon-with-data">
                          <Email />
                          <div className="gery-title">Email</div>
                        </div>
                        <div>{user.email}</div>
                      </div>
                      <div className="section-data phone">
                        <div className="icon-with-data">
                          <PhoneNumber />
                          <div className="gery-title">Phone</div>
                        </div>
                        <div>{user.phone}</div>
                      </div>
                    </div>
                    <div className="grey-section description-section section-data">
                      <div className="gery-title">Description</div>
                      <div className="">{user.description}</div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);
};

export default UserProfile;