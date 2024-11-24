// import "../pages/Home.css"
// import Carousel from "react-bootstrap/Carousel";
// import ban1 from "../images/sldr1.jpg";
// import shop from "../images/shopbnr1.jpg";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useDispatch } from 'react-redux';
// import { addToCard } from '../cardSlice';
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Function to load product data from API
//   const loadProducts = () => {
//     const api = "http://localhost:9000/product/showproduct";
//     axios
//       .get(api)
//       .then((response) => {
//         setProducts(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   // Call loadProducts once when component mounts
//   useEffect(() => {
//     loadProducts();
//   }, []);

//   // Add item to the cart
//   const addToCart = (id, name, desc, pro, price, image) => {
//     dispatch(addToCard({ id, name, description: desc, product: pro, price, image, qnty: 1 }));
//   };

//   // Map through the products to create a list of cards
//   const productCards = products.map((product) => (
//     <Card key={product._id} style={{ width: '18rem', marginTop: '20px' }}>
//       <a href="#" onClick={() => navigate(`/prodetail/${product._id}`)}>
//         <Card.Img variant="top" src={product.image} style={{ height: '300px' }} />
//       </a>
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text>
//           {product.description}
//           <br />
//           {product.product}
//           <br />
//           <span style={{ color: 'red', fontWeight: 'bold' }}>Price: Rs {product.price}/-</span>
//         </Card.Text>
//         <Button variant="primary" onClick={() => addToCart(product._id, product.name, product.description, product.product, product.price, product.image)}>
//           Add to Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   ));

//   return (
//     <>
//       <Carousel>
//         <Carousel.Item>
//           <img src={ban1} alt="Promotional Banner 1" width="100%" height="500" className="caro" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={ban1} alt="Promotional Banner 2" width="100%" height="500" className="caro" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={ban1} alt="Promotional Banner 3" width="100%" height="500" className="caro" />
//         </Carousel.Item>
//       </Carousel>

//       <div className="container">
//         <div className="Shopbnr1">
//           <img src={shop} alt="Shop Banner" width="100%" height="300px" style={{ borderRadius: "10px" }} />
//         </div>

//         <h3 className="section-title"  align="center">Our Trending Products</h3>

//         <div id="cardData" className="product-cards"
//         style={{
//             display: "flex",
//             justifyContent: "space-around",
//             flexWrap: "wrap",
//             marginTop: "30px",
//             padding: "0 20px",
//           }}>
//           {productCards}
//         </div>

//         <div className="Shopbnr">
//           <h3 className="promo-title">Big Saving on Top-selling Smartphones</h3>
//           <h2 className="promo-subtitle">Get 85% off on Big Billion Days 2024</h2>
//           <button className="Shopbbtn">Shop Now</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import "../pages/Home.css"
import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/sldr1.jpg";
// import ban2 from "../images/sdr2.jpg";




import shop from "../images/shopbnr1.jpg"

import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";   
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';
import { useNavigate } from "react-router-dom";



const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate();

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
  const addcardData=(id, name, desc, pro, price, image)=>{
    dispatch(addToCard({id:id, name:name, description:desc, product:pro, price:price, image:image, qnty:1}))
   }

  const ans=mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem', marginTop:'20px' }}>
          <a href="#" onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
          <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
          </a>
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
         onClick={()=>{addcardData(key._id, key.name, key.description, key.product, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
      </>
      )
     })

  return (
    <>
      
        {/* <Carousel>
          
            <img
              style={{ width: "100%", marginRight: "-500px"  }}
              src={ban1}
              alt="Laptop 1"
            />

        </Carousel> */}



     <Carousel>
     
      <Carousel.Item >
          <img src={ban1} width="100%" height="500" className="caro" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src={ban1} width="100%" height="500" className="caro" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src={ban1} width="100%" height="500"  className="caro" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
     
      
     
       <div className="Shopbnr1"  >
      <img src={shop} width="100%" height="300px" style={{borderRadius:"10px"}} />
       </div>
      

      <h3 style={{ textAlign: "center", marginTop: "20px", fontWeight: "600", fontFamily: "Arial, sans-serif" }}>
        Our Trending Products
      </h3>

      <div
        id="cardData"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "30px",
          padding: "0 20px",
        }}
      >
        {ans}
      </div>

      <div className="Shopbnr">
        <h3 style={{ fontSize: "24px", color: "#FFFFFF", fontFamily: "Arial,sans-serif", fontWeight: "400" }}>
          Big saving on Topselling smartphones
        </h3>
        <h2 style={{ fontSize: "32px", color: "#FFFFFF", fontFamily: "Arial,sans-serif", fontWeight: "600" }}>
          Get 85% off on Big Billion Days 2024
        </h2>
        <button className="Shopbbtn">Shop now</button>
      </div>

    </>
  );
};
export default Home;