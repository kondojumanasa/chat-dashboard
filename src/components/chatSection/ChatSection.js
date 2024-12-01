import './chatSection.css';
import { FaEllipsisH } from 'react-icons/fa'; // 3 dots icon
import { IoCheckmark } from "react-icons/io5";

const ChatApp = () => {

  const messages = [
    {
      id: 1,
      sender: "Rachel Adams",
      content: "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.",
      time: "9:08 PM",
      isReceived: true,
    },
    {
      id: 2,
      sender: "You",
      content: "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.",
      time: "27 Jul, 2024 - 9:08 PM",
      isReceived: false,
    },
    {
      id: 3,
      sender: "Rachel Adams",
      content: "Vivamus sagittis urna eu augue iaculis, non tincidunt lorem tempus.",
      time: "9:10 PM",
      isReceived: true,
    },
   
  ];

 

  

 
 

  return (
    <div className="chat-container">
     
      <div className="tabs">
        <div className="tab active">Conversation</div>
        <div className="tab">Attachment</div>
      </div>

    
      <div className="messages">
        {messages.map((msg) => (
          <div className={`message ${msg.isReceived ? 'received' : 'sent'}`} key={msg.id}>
            <div className="message-header">
              <div className="user-info">
                <div className="user-logo">
                  {msg.sender === "Rachel Adams" ? "RA" : "Y"}
                </div>
                <div className="user-details">
                  <span className="sender">{msg.sender}</span>
                  <span className="status">
                         <span className="time">{msg.time}</span>
                         {msg.isReceived ? 'Received' : 'Sent'} by WhatsApp <IoCheckmark  className="check-icon" />
                    </span>
                
                </div>
              </div>
              <FaEllipsisH className="three-dots" />
            </div>
            <div className="message-content">
              {msg.content}
            </div>
          </div>
        ))}

      </div>
      <div className="input-section">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="sms"
            name="sms"
         
          />
          <label htmlFor="sms">SMS</label>
          
          <input
            type="checkbox"
            id="whatsapp"
            name="whatsapp"
           
          />
          <label htmlFor="whatsapp">WhatsApp</label>
          
          <input
            type="checkbox"
            id="email"
            name="email"
            
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Type a message..."
           
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
