import homeIcon from "../../Assests/home.png";
import profile from "../../Assests/Ellipse 3855.png";
import settingIcon from "../../Assests/cog.png";
import logoutIcon from "../../Assests/sign-out.png";
import "./navbar.css";




function Topnavbar() {
  return (
    <div className="header-nav">
        <h1>Chat / Feed chat</h1>
        <div className="header-nav-2">
            <img src={homeIcon} alt="home-icon"/>
            <button className="process-btn">
            Process Owner HOD
            </button>
            <button className="admin-btn">Admin</button>
            <h4>Palak Bansal</h4>
            <img src={profile} alt="img" className="profile-navbar" />
            <img src={settingIcon} alt="icon" />
            <img src={logoutIcon} alt="icon" />
            <label>Logout</label>
        </div>
    </div>
  )
}

export default Topnavbar