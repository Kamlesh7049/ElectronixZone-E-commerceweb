import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/sdr1.png";
// import ban2 from "../images/sdr2.jpg";
// import ban3 from "../images/sdr1.png";

import shop from "../images/shopbnr01.jpg"

const Home=()=>{
    return(
        <>
         <div className="home-main-div">
            <Carousel
                // showThumbs={false}
                // autoPlay={true}
                // infiniteLoop={true}
                // interval={3000}
                // showArrows={false}
                // showStatus={false}
            >
                <div className="first-home-sild-backgrond">
                    <img style={{ width: "100%", marginRight: "-500px" }} src={ban1} alt="Laptop 1" />
                    <div className="overlay-text">
                        <h1>Get 15% On Sale</h1>
                        <h2>UNDER FAVORABLE SMART GADGETS</h2>
                        <br />
                        FROM <br /><p>&euro;799.00/<span>999.00</span></p>
                        <button className="btn-slid1">use Code : hdvwqy23</button>
                        <button className="btn-slid2">buy now</button>
                    </div>
                </div>
                <div>
                    {/* <img src={shop} alt="Laptop 2" /> */}
                    <div className="overlay-text">
                        <h1>Get 15% On Sale</h1>
                        <h2>UNDER FAVORABLE SMART GADGETS</h2>
                        <br />
                        FROM <br /><p>&euro;799.00/<span>999.00</span></p>
                        <button className="btn-slid1">use Code : hdvwqy23</button>
                        <button className="btn-slid2">buy now</button>
                    </div>
                </div>
            </Carousel>
            </div>
         

          <hr  size="6" color='red'/>
          <h1 align="center"> Our Trending Products</h1>
          <hr  size="6" color='red'/>
         <img src={shop} width="100%" height="200"/>
         <center>
          <button className='btn'>Shop now</button>
          <hr size="6" color='red' />
         </center>
        </>
    )
}

export default Home;