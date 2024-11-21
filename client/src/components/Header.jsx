// import { FaShoppingCart } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";
import  "../components/Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

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
        <FaShoppingCart />
        <a href="#" onClick={handleShow}>
          <GrUserAdmin className="space" />
        </a>
        <FaSearch className="space" />
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Admin Area for managing your website
          <br />
          Enter Admin: 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <br />
          Enter Password:  
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
