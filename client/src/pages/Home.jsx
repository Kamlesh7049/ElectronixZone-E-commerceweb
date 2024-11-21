import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/sdr1.png";

import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import shop from "../images/shopbnr01.jpg";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    let api = "http://localhost:9000/product/showproduct";
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans=mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem', marginTop:'20px' }}>
      <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          <br/>
          {key.product}
          <br/>
         <span style={{color:'red', fontWeight:'bold'}}> Price :Rs {key.price}/- </span> 
        </Card.Text>
        <Button variant="primary"
         onClick={()=>{addcardData(key.id, key.name, key.description, key.product, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
      
      </>
    )
  })

  return (
    <>
      
        <Carousel>
          
            <img
              style={{ width: "100%", marginRight: "-500px"  }}
              src={ban1}
              alt="Laptop 1"
            />

        </Carousel>
      

      <h3 align="center"> Our Trending Products</h3>
      <div id="carddata">
        {ans}
        </div>
      {/* <hr size="6" color="red" /> */}
      <img src={shop} width="100%" height="200" />
      <center>
        {/* <button className="btn">Shop now</button> */}
        {/* <hr size="6" color="red" /> */}
      </center>
    </>
  );
};

export default Home;
