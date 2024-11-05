import { useRouter } from 'next/router';
import Header from "../../components/Header/Header";
import SideMenu from '../../components/SideMenu/SideMenu';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useEffect, useState } from 'react';
import { fetchUserData } from '../../api';

function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const style = {
     height: '100vh' , 
  };
  const flexStyle = {
    display: 'flex',
    flexDirection: 'row',
 };
  
  // npm install @next/font
  // npm install @fontsource/poppins
  //npm install @fontsource/inter

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData(id);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };
    if (id) loadUserData();
  }, [id]);

  if (!id) return <p></p>;

  return (
    <div style={style}>
      <Header user={user} />
      <div style={flexStyle}>
        <SideMenu />
        <UserProfile id={id} />
      </div>
    </div>
  );
}

export default Profile;
