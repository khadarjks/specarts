import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (

<div className="banner">
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/imag1.png")} width="100%"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/imag2.png")} width="100%"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/imag3.png")} width="100%"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      <div className="offercon">
      <div className="foffer">  
      <h2>First Purchase Offer</h2>
      </div>
      <div className="offer">
      <h2>EXtra 60% OFF</h2>
      <button>Shop Now | Use Code: SPECARTS60</button>
      </div>
      </div>
    </div>

    );
  }
  
  export default Banner;