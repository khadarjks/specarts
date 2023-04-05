import './Head.css';

function Contactlens() {
    return (
<div className="lens">
    <h2>To look more attractive - Try Contact Lens</h2>
    <h5>Starts from just @ ₹299</h5>
    <div className="lensimage">
    <img src={require("./assets/lens1.png")} alt="" width="100%"/>
    <button>Shop Now</button>
    </div>
</div>

    );
  }
  
  export default Contactlens;