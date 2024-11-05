import Link from "next/link";
import Image from "next/image";
import '../Header/Header.css';
import Legistai from '../../icons/Legistai';
import Search from '../../icons/Search';
import Notification from '../../icons/Notification';
import userImage from '../../images/userImage.png';
import Eng from '../../images/Eng.png';

const Header = ({ user }) => (
    <header className="header">
        <Legistai /> 
        <div className="left-side">
            <div className="has-search">
                <span><Search /></span>
                <input type="search" placeholder="Search" />
            </div>
            <div className="language-selector">
            <div><Image src={Eng} alt="Eng" width={40} height={40} /></div>
                <select class="language-selector" onchange="">
                    <option value="tr">TR</option>
                    <option value="en" selected>ENG</option>
                    <option value="de">DE</option>
                </select> 
            </div>
            <div className="has-notification">
                <Notification />
            </div>
            <div className="user-name-img">
                <div><Image src={userImage} alt="User Image" width={40} height={40} /></div>
                <div className="user-name">
                    <div>{user ? user.name : ''}</div> 
                    <div className="user-title-job">Product Manager</div> 
                </div>
            </div>
        </div>              
    </header>
); 

export default Header;