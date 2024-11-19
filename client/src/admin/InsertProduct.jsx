
// import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const InsertProduct = () => {

    const [input, setInput]= useState({});

    const [myimage, setMyimage]= useState();
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleImage=(e)=>{
        setMyimage(e.target.files[0]);
        console.log(myimage);
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
    }
  return (
   <>
   <center>
   <h5>Welcome to Insert Product Page!!</h5>
   <Form style={{width:'300px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product name</Form.Label>
        <Form.Control type="text" name="name" 
        value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" 
         value={input.description} onChange={handleInput}/>
      </Form.Group>
      <Form.Label> Select Category</Form.Label>
      <Form.Select aria-label="Default select example" name="category" 
      value={input.category} onChange={handleInput} >
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
   </center>
   </>
  )
}

export default InsertProduct