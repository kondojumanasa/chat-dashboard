import React, { useState } from "react";
import './userchange.css';
import comments from "../../Assests/comments.png"
import { FaChevronRight } from "react-icons/fa";

const UserTabs = () => {
  const users = [
    { id: 1, name: "Cheyenne Bergson", initials: "CB" },
    { id: 2, name: "Jonathan Higgins", initials: "CB" },
    { id: 3, name: "Capt. Trunk", initials: "CB" },
    { id: 4, name: "Hannibal Smith", initials: "CB" },
    { id: 5, name: "Capt. Trunk", initials: "CB" },
    { id: 6, name: "Hannibal Smith", initials: "CB" }
  ];

  const [activeUser, setActiveUser] = useState(0);

  return (
    <div className="user-tabs">
      {users.map((user, index) => (
        <div
          key={user.id}
          className={`user-tab ${activeUser === index ? 'active' : ''}`}
          onClick={() => setActiveUser(index)}
        >
          <div className="user-initials">{user.initials}</div>
          <span  className={`user-name ${activeUser === index ? 'active' : ''}`}>{user.name}</span>
        </div>
      ))}
      <div className="message-tab">
      <div className="message-initials">
        <img  src={comments}  alt="comments-icon"/>
      </div>
        <span>Messaging</span>
        <div className="message-icon">
        <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default UserTabs;
