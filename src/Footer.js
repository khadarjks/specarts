import './Head.css';

function Footer() {
    return (
<div className="footers">
<div className="footer">
<div className="logo">
        <img src={require("./assets/specartslogo.jpg")} alt= "" width="100%"/>
    </div>
    <div className="title">
        <h2>spe<span>cart</span>s</h2>
    </div>
    <div className="footerlist">
        <ul>
            <li>Services</li>
            <li>Online Shopping</li>
            <li>Store Locator</li>
        </ul>
        <ul>
        <li>About US</li>
        <li>Franchise with Us</li>
        <li>Careers</li>
        </ul>
        <ul>
        <li>Contact US</li>
        <li>Track Order</li>
        <li>Return Request</li>
        </ul>
        </div>
        <div className="search">
        <input type="text" placeholder="writeyour@email.here"/>
        </div>
        <div className="searchbtn">
        <button>Submit</button>
        </div>
    </div>
    
    <div className="footer1">
        <div className="cr">
            <h5>Copyright © 2022</h5>
        </div>
        <h5>Terms & Conditions</h5>
        <h5>Privacy Policy</h5>
        <div className="social">
            <h5>OUR SOCIALS</h5>
        </div>
    </div>
    <div className="socialimg">
            <img src={require("./assets/fb.png")} alt= "" width="3%"/>
            <img src={require("./assets/google.png")} alt= "" width="3%"/>
            <img src={require("./assets/ig.png")} alt= "" width="3%"/>
            <img src={require("./assets/twitter.png")} alt= "" width="3%"/>
    </div>
    </div>

   

    );
  }
  
  export default Footer;
  