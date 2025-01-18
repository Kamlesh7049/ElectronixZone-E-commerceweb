import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { qntyIncrement, qntyDecrement, dataRemove } from "../cardSlice";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import './CardData.css'; // Import the CSS file

const CardData = () => {
  const myCard = useSelector((state) => state.mycard.card);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qntyInc = (id) => {
    dispatch(qntyIncrement({ id: id }));
  }

  const qntyDec = (id) => {
    dispatch(qntyDecrement({ id: id }));
  }

  let sno = 0;
  let totalAmount = 0;

  const ans = myCard.map((key) => {
    totalAmount += key.price * key.qnty;
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno} </td>
        <td>
          <img src={key.image} alt={key.name} />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.product}</td>
        <td>₹{key.price}</td>
        <td>
          <a href="#" className="quantity-btn" onClick={() => { qntyDec(key.id) }}>
            <FaMinusCircle />
          </a>
          <span className="quantity-text">{key.qnty}</span>
          <a href="#" className="quantity-btn" onClick={() => { qntyInc(key.id) }}>
            <FaPlusCircle />
          </a>
        </td>
        <td>₹{key.price * key.qnty}</td>
        <td>
          <Button className="remove-btn" onClick={() => { dispatch(dataRemove(key.id)) }}>
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="card-table-container">
      <center>
        <h1>My Cart</h1>
      </center>

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ans}
          <tr>
            <th colSpan="6"></th>
            <th>Net Amount</th>
            <th>₹{totalAmount}</th>
            <th></th>
          </tr>

          <tr>
            <th colSpan="8"></th>
            <th>
              <button className="checkout-btn" onClick={() => { navigate("/checkout") }}>
                Checkout
              </button>
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CardData;
