import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';




const Header = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();


  const [show, setShow] = useState(false);

  const handleClose=()=>setShow(false)
  const handleShow=()=>setShow(true)


  const handleSubmit=()=>{
    let api="http://localhost:8000/adminuser/usercheck";
    axios.post(api,{user:username,password:password}).then((res)=>{
      console.log(res);
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
    {/* <h1>Welcome to Header!!!</h1> */}
    <div id="header">
   
   <FaShoppingCart  />
   
  <a href="#" onClick={handleShow} > 
   <RiAdminFill className="space" />
   </a>
   
   <FaSearch className="space" />

   </div>


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Admin Area for Manage your Website
          <br/>
          Enter Admin  : <input type="text" value={username}
           onChange={(e)=>{setUsername(e.target.value)}} />
          <br/>
          Enter Password :  <input type="password" value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/>
         


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
  )
}

export default Header;