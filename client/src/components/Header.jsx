import  "../components/Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useSelector } from "react-redux";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleSubmit = () => {
  //   const api = "http://localhost:9000/adminuser/usercheck";  // Make sure this endpoint is correct
  //   axios.post(api, { user: username, password: password })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         // Success message
  //         message.success("You are successfully logged in!");
  //         navigate("/admin");  // Redirect to admin page
  //       } else {
  //         // Error message
  //         message.error(res.data.msg || "Login failed. Please try again.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Login error: ", error);
  //       // Show a network error message
  //       message.error("Network error. Please try again later.");
  //     });
  // };


  const CardData=useSelector((state)=>state.mycard.card)


  const cardLength=CardData.length;

  const handleSubmit=()=>{
    let api="http://localhost:9000/adminuser/usercheck";
    axios.post(api,{user:username,password:password}).then((res)=>{
      // console.log(res);
      if(res.status==200)
      { 
        message.success("You are Successfully Login!!!")
        navigate("/admin")
      }
      else
      {
        message.error("response.data.msg");
      }
    })

  }


  return (
    <>
      <div id="header">
      {cardLength}
       <a href="#" onClick={()=>{navigate("/carddata")}}>
       <FaShoppingCart size={20} color="black"/>
       </a>
       
        <a href="#" onClick={handleShow}>
          <GrUserAdmin className="space"  size={20} color="black"/>
        </a>
        <FaSearch className="space"  size={20} color="black"/>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title style={{ fontWeight: 'bold', color: '#343a40' }}>Admin Login Area</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p style={{ marginBottom: '15px', color: '#6c757d' }}>
      Admin Area for managing your website
    </p>
    <div className="form-group mb-3">
      <label htmlFor="admin-username" style={{ fontWeight: '500' }}>Enter Admin:</label>
      <input
        type="text"
        id="admin-username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        style={{ marginTop: '5px' }}
      />
    </div>
    <div className="form-group">
      <label htmlFor="admin-password" style={{ fontWeight: '500' }}>Enter Password:</label>
      <input
        type="password"
        id="admin-password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{ marginTop: '5px' }}
      />
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose} style={{ borderRadius: '5px' }}>
      Close
    </Button>
    <Button
      variant="primary"
      onClick={handleSubmit}
      style={{
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderRadius: '5px',
        padding: '8px 15px',
        fontWeight: 'bold',
      }}
    >
      Login
    </Button>
  </Modal.Footer>
</Modal>

    </>
  );
};

export default Header;
