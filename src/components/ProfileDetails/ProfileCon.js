import "./profile.css";
import mapIcon  from "../../Assests/map-marker.png";
import Frame  from "../../Assests/Frame.png";
import AddButton from "../../Assests/addButton.png" ;
import Percent75 from "../../Assests/percent75.png";
import Percent80 from "../../Assests/percent80.png";
import userAdd from "../../Assests/user-add.png";

function Profile () {
    return (
        <div className="profile-container">
            <div className="cb-main">
                <div className='cb-icon'>
                    <h2 className="cb-icon-head">CB</h2>
                </div>
                <div className="name-con">
                    <h2 className='pro-name'>Hannibal Smith</h2>
                    <div className="map-con">
                        <img className='pro-image' src={mapIcon} alt="map"/>
                        <p>1 Market street san francisco, CA 94105</p>
                    </div>
                </div>
            </div>


           <div className='customer-container'>
                <div className='customer-id'>
                    <p className='customer-name'>Customer ID</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h6>12345</h6>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div class="horizontal-line"></div>
        
                <div className='customer-id'>
                    <p className='customer-name'>Email Address</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h5>rachel@sample.com</h5>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div class="horizontal-line"></div>
                 
                 <div className='customer-id'>
                    <p className='customer-name'>Phone Number</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h5>8051298905</h5>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div className="add-button">
                    <img src={AddButton} alt="add"/>
                </div>
            </div>
           

           <div className='customer-container'>
                <div className='customer-id'>
                    <p className='customer-name'>Loyalty Tier</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h5>Silver</h5>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div class="horizontal-line"></div>
                 
                 <div className='customer-id'>
                    <p className='customer-name'>Segment</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h5>Sleepy Customer</h5>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div className="add-button">
                    <img src={AddButton} alt="add"/>
                </div>
            </div>

             <div className='customer-container'>
                <div className='customer-id'>
                    <p className='customer-name'>Lifetime Value</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h5>$ 1M</h5>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div class="horizontal-line"></div>
                 
                 <div className='customer-id'>
                    <p className='customer-name'>Propensity to Purchase</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={Percent75} alt="percentage" className='percent'/>
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>
                <div className="add-button">
                    <img src={AddButton} alt="add"/>
                </div>
            </div>

            <div className='customer-container'>
                <div className='customer-id'>
                    <p className='customer-name'>Engagement Score</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                       <img src={Percent80} alt="percentage" className="percent"/>  
                        <img className="pro-image" src={Frame} alt="frame" />
                    </div>
                </div>   
                <div className="add-button">
                    <img src={AddButton} alt="add" className='add'/>
                </div>
            </div>

            
            <button className="user-button" >
                <img src={userAdd} alt="user-add" className='percent'/>
                <p className="pro-user">Assign other Agent</p>
            </button>

             <button className=" new-user-btn " >
                <p className="new-user">Add New Widget</p>
            </button>

</div>
    )
};

export default Profile;