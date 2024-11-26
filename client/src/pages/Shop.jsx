import { useState } from "react";
import Button from "react-bootstrap/Button";

const Shop = () => {
  const [input, setInput] = useState({});

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({...values, [name]: value}));
  }
  return (
    <>
      <h1 align="center">Your Shopping Place</h1>
      <div className="shoppage">
        <div id="shopmenu">
          <h5>Set Your Pattern</h5>
          Low Price :{" "}
          <input
            type="number"
            name="lprice"
            value={input.lprice}
            onChange={handleInput}
          />
          <br />
          High Price :{" "}
          <input
            type="number"
            name="hprice"
            value={input.hprice}
            onChange={handleInput}
          />
          <br />
          <input
            type="checkbox"
            value="all"
            name="allpro"
            onChange={handleInput}
          />{" "}
          Select All Products
          <br />
          <input
            type="checkbox"
            value="Leptop"
            name="leptoppro"
            onChange={handleInput}
          />{" "}
          Leptop
          <br />
          <input
            type="checkbox"
            value="Computer"
            name="computerpro"
            onChange={handleInput}
          />{" "}
          Computer
          <br />
          <input
            type="checkbox"
            value="Mobile"
            name="mobilepro"
            onChange={handleInput}
          />{" "}
          Mobile
          <br />
          <Button variant="primary" >
            Search
          </Button>
        </div>
        <div id="shopData"></div>
      </div>
    </>
  );
};

export default Shop;
