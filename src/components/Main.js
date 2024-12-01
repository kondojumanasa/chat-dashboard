import { useState } from "react";
import "./Main.css";
import Topnavbar from "./TopNavBar/Top-navbar";
import UserTabs from "./UserChnageTab/UserChangeTab";
import ChatApp from "./chatSection/ChatSection";
import Escalate from "./Escalate/Escalate";
import Profile from "./ProfileDetails/ProfileCon";
import AskCatura from "./AskCatura/AskCatura";
import ActionLauncher from "./ActionLauncher/ActionLauncher";
import CaseFavorite from "./Case/Case";

import  logo from "../Assests/riskhawk-logo 1.png";
import closeIcon from "../Assests/Group 1171287133.png";
import fileSearch2 from "../Assests/file-search-02.png"
import fileCheck02  from  "../Assests/file-check-02.png";
import jointIcon from  "../Assests/Icon.png";
import users1 from  "../Assests/users.png";
import users2 from  "../Assests/users (1).png";
import siteMap from  "../Assests/sitemap.png";
import user from  "../Assests/user.png";
import box from  "../Assests/box.png";
import circleOff1 from  "../Assests/circle-off.png";
import circleOff2 from  "../Assests/circle-off (1).png";
import wrench from  "../Assests/wrench.png";
import stars from  "../Assests/star-06.png";
import gift from "../Assests/gift.png";



const Main = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Internal Audit", src: fileSearch2},
    { title: "UAT Testing", src: fileCheck02 },
    { title: "Intract", src: jointIcon },
    { title: "Queue ", src: users1},
    { title: "Workflow", src: siteMap },
    { title: "Admin", src: user },
    { title: "Asset ", src: box },
    { title: "Parent", src:users2 },
    { title: "Option One", src: circleOff1 },
    { title: "Option Two", src: circleOff2 },
    { title: "All Accessories", src: wrench },
    { title: "Internal Audit", src: fileSearch2 },
    { title: "Decorating", src: stars },
    { title: "Presenting", src: gift },
  ];

  return (
    <div className="container">
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <img
          src={closeIcon}
          className={`control-button ${!open && "closed"}`}
          onClick={() => setOpen(!open)}
          alt="button"
        />
        <div className="logo">
          <img
            src={logo}
            className={`logo-img ${open && "open"}`}
             alt="button"
          />
        </div>
        <ul className="menu">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`menu-item ${Menu.gap ? "gap" : ""}`}
            >
              <img src={Menu.src} alt="navbar-images"  className="menu-icons"/>
              <span className={`${!open && "closed"}`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <Topnavbar />
        <UserTabs />
        <div className="main-content-2">

            <div className="left-content">
                <Profile />
            </div>
            <div className="middle-content">
                <Escalate />
                <ChatApp />
            </div>
            <div className="right-content">
                <AskCatura />
                <ActionLauncher />
                <CaseFavorite />
            </div>


        </div>
      </div>
    </div>
  );
};

export default Main;
