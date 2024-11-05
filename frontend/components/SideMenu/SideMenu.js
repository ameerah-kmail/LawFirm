import Link from 'next/link';
import '../SideMenu/SideMenu.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Dashboard from '../../icons/Dashboard';
import Drive from '../../icons/Drive';
import Profile from '../../icons/Profile';
import Calendar from '../../icons/Calendar';
import LawfirmOptions from '../../icons/LawfirmOptions';
import Settings from '../../icons/Settings';
import StartnewChat from '../../icons/StartnewChat';
import LogOut from '../../icons/LogOut';
import { fetchUserData } from '../../api';
import UserProfile from '../../components/UserProfile/UserProfile';

function SideMenu() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  const menuItems=[{icon:<Dashboard />,label:'Dashboard', path: '#'},
    {icon:<Drive />,label:'Drive', path: '#'},
    {icon:<Profile />,label:'Profile', path: `/profile/${id}`},
    {icon:<Calendar />,label:'Calendar', path: '#'},
    {icon:<LawfirmOptions />,label:'Law firm Options', path: '#'},
    {icon:<Settings />,label:'Settings', path: '#'},
    {icon:<StartnewChat />,label:'Start new Chat', path: '#'},
    {icon:<LogOut />,label:'Log Out', path: '/register'},
  ];

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

  if (!id) return <p>Loading...</p>;

  return (
    <nav className="side-menu">
      <div class="welcome-Legistai">Welcome to the Legistai!</div>
      <ul className="side-menu-items">
        {menuItems.map((item,index)=>(
          <li key={index} className={`menu-item ${item.label === 'Log Out' ? 'logout-item' : ''} ${item.label === 'Start new Chat' ? 'start-new-chat-item' : ''}`}> 
            <Link href={`${item.label === 'Log Out' ?item.path :"#"}`} className="menu-link">
              <span className="icon">{item.icon}</span>
              <span className="menu-item-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideMenu;