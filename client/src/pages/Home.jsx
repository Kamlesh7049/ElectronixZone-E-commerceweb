import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/i1.jpg";
import ban2 from "../images/i1.jpg";
import ban3 from "../images/i1.jpg";

const Home=()=>{
    return(
        <>
           
           <Carousel>
      <Carousel.Item>
          <img src={ban1} width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         


          <h1 align="center"> Our Trending Collections</h1>
        </>
    )
}

export default Home;