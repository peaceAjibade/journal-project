import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './App.css';

export function Login(){
  return (
    <Container id= "main-container" className = "d-grid h-100">
      <Form id = "sign-in-form" className = "text-center w-100">
      
        <h1 className='mb-4 fs-3 fw-normal'> Please Sign In</h1>

        <Form.Group className="mb-2" controlId='userEmail'>
          <Form.Control type="email" size='lg' placeholder='Email Address' autoComplete='userEmail'className='position-relative'/>
        </Form.Group>

        <Form.Group className='mb-4' controlId='userPassword'>
          <Form.Control type= "password" size='lg' placeholder='Password' className='position-relative'/>
        </Form.Group>

        <div className='d-grid'>
          <Button className= 'mb-2'variant='primary' type="submit" size='lg'>
          Sign In
        </Button>
        </div>
        
        <Form.Group>
          <Form.Text className="text-muted">
          Don't have an account?  <Link to="/register">Register</Link>
        </Form.Text>
        </Form.Group>
        
      </Form>
    </Container>
  );
}