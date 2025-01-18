import "../pages/Checkout.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { removeFromCart } from "../cardSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Checkout = () => {
  const myCard = useSelector((state) => state.mycard.card);
  const products = myCard?.map((data) => {
    return data.name;
  });

  const dispatch = useDispatch();
  const [isload, setIsload] = useState(false);
  const [input, setInput] = useState({});
  const [mypro, setMypro] = useState({
    name: "",
    creator: "",
    img: "",
    proname: [],
    price: "",
  });

  const initPay = (data) => {
    const options = {
      key: "rzp_test_PaZKuQKOFylYje",
      amount: data.amount,
      currency: data.currency,
      name: mypro.name,
      description: "Test",
      image: mypro.img,
      order_id: data.id,
      handler: async (response) => {
        if (response.razorpay_payment_id) {
          myCard.forEach((item) => {
            dispatch(removeFromCart(item.id));
          });
          setInput({
            name: "",
            address: "",
            city: "",
            pincode: "",
            mobile: "",
          });
        }
        try {
          const verifyURL = "https://electronixzone-e-commerceweb.onrender.com/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);          
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    setIsload(true);
    await setMypro({
      creator: brand,
      img: proimg,
      price: totalAmount,
      proname: products,
    });

    try {
      const orderURL = "https://electronixzone-e-commerceweb.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: mypro.price });

      initPay(data.data);
    } catch (error) {
      console.log(error);
    }

    const api = "https://electronixzone-e-commerceweb.onrender.com/users/usersave";
    axios
      .post(api, { ...input, proname: mypro.proname, price: mypro.price })
      .then((res) => {
        console.log("Data Saved!!");
      });
    setIsload(false);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  let sno = 0;
  let totalAmount = 0;
  let proname = " ";
  let brand = "Testing";
  let proimg = " ";

  const ans = myCard.map((key) => {
    totalAmount += key.price * key.qnty;
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno} </td>
        <td>
          <img src={key.image} width="100" height="100" alt={key.name} />
        </td>
        <td> {key.name} </td>
        <td> {key.description} </td>
        <td> {key.product} </td>
        <td> ₹{key.price}</td>
        <td>{key.qnty}</td>
        <td> ₹{key.price * key.qnty}</td>
        <td></td>
      </tr>
    );
  });

  return (
    <>
      <div id="checkoutPage">
        <div id="checkoutForm">
          <h4 align="center">Fill Your Shipping Address</h4>
          <Form style={{ width: "90%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={input.address}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={input.city}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={input.pincode}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={input.mobile}
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handlePay}>
              Submit
            </Button>
          </Form>
        </div>

        <div id="checkoutTable">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {isload ? <tr><td colSpan="8">Loading...</td></tr> : ans}
              <tr>
                <th colSpan="6"></th>
                <th>Net Amount</th>
                <th> ₹{totalAmount}</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Checkout;
