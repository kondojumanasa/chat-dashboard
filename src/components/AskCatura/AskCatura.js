import './askcatura.css';
import sentbutton from "../../Assests/sent-fast.png";
import eye from "../../Assests/eye.png";
import envelope from "../../Assests/envelope.png";
import copy from "../../Assests/copy.png";
import Group from "../../Assests/Group.png";


function AskCatura() {
 


  return (
    <div className="ask-catura-container">
      <header className="header">
        <h4>Ask Catura</h4>
        <div className="dropdowns">
            <img  src={envelope} alt="button" className='icons'/>
            <p className='para'>WhatsApp</p>
            <img className='group-icon' src={Group} alt="group"/>
          <img  src={envelope} alt="button" className='icons'/>
            <p className='para'>Greeting</p>
            <img className='group-icon' src={Group} alt="group"/>
        </div>
      </header>
      <hr class="custom-line"></hr>

      <div className="content">
        <div className="background">
          <div className="overlay">
            <h6>Greeting Template</h6>
            <div className="buttons">
              <button className='button'> <img className="preview-icon" src={copy} alt="copy"/> Copy to Send</button>
              <button className='button'> <img className="preview-icon" src={eye} alt="eye"/>Preview</button>
            </div>
            
          </div>

        </div>
        
      </div>
      <div className='input-container'>
      <input 
            className='ask-input'
              type="text"   
              placeholder="Type a message..."
            />
            <button className="send-btn">
                <img src={sentbutton} alt="button" className='sent-button'/>
            </button>
        </div>
    </div>
  );
}

export default AskCatura;