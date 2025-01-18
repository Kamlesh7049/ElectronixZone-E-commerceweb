import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCard } from "../cardSlice";
import { useNavigate } from "react-router-dom";
import "./Search.css"; // Custom styles for responsiveness

const Search = () => {
  const [myPro, setMyPro] = useState("");
  const [myData, setMyData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMyPro(e.target.value);
    if (e.target.value.length > 2) {
      let api = `https://electronixzone-e-commerceweb.onrender.com/product/searchproduct/?product=${e.target.value}`;
      axios.get(api).then((res) => {
        setMyData(res.data);
        console.log(res.data);
      });
    } else {
      setMyData([]);
    }
  };

  const addCardData = (id, name, desc, pro, price, image) => {
    dispatch(
      addToCard({
        id: id,
        name: name,
        description: desc,
        product: pro,
        price: price,
        image: image,
        qnty: 1,
      })
    );
  };

  const productCards = myData.map((product) => (
    <Card className="product-card" key={product._id}>
      <a
        href="#"
        onClick={() => {
          navigate(`/prodetail/${product._id}`);
        }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </a>
      <Card.Body>
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-description">
          {product.description}
          <br />
          {product.product}
          <br />
          <span className="product-price">Price: ₹{product.price}/-</span>
        </Card.Text>
        <Button
          variant="primary"
          className="add-to-cart-btn"
          onClick={() =>
            addCardData(
              product._id,
              product.name,
              product.description,
              product.product,
              product.price,
              product.image
            )
          }
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <div className="search-container">
        <h1 className="search-title">Search Products</h1>
        <input
          type="text"
          placeholder="Enter product name..."
          className="search-input"
          value={myPro}
          onChange={handleChange}
        />
      </div>
      <div className="product-grid">{productCards}</div>
    </>
  );
};

export default Search;
