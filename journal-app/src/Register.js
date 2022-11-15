import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup';

// const schema = yup.object().shape({
//   userName: yup.string().required(),
//   email: yup.string().email().required(),
//   password: ,
//   confirmPasssword: ,
// })

export function Register(){
    return(
      <Container id= "main-container" className = "d-grid h-100">
      <Form id = "sign-up-form" className = "text-center w-100">
      
        <h1 className='mb-3 fs-3 fw-normal'>Register</h1>

        <Form.Group className="mb-2" controlId='userName'>
          <Form.Control type="text" size='lg' placeholder='Username' className='position-relative' required/>
        </Form.Group>

        <Form.Group className='mb-2' controlId='userEmail'>
          <Form.Control type= "email" size='lg' placeholder='Email Address' className='position-relative' required/>
        </Form.Group>

        <Form.Group className='mb-2' controlId='userPassword'>
          <Form.Control type= "password" size='lg' placeholder='Password' className='position-relative' required/>
        </Form.Group>

        <Form.Group className='mb-4' controlId='confirmPassword'>
          <Form.Control type= "password" size='lg' placeholder='Confirm Password' className='position-relative' required/>
        </Form.Group>

        <div className='d-grid'>
          <Button className= 'mb-2'variant='primary' type="submit" size='lg'>
          Sign In
        </Button>
        </div>
        
        <Form.Group>
          <Form.Text className="text-muted">
          Already have an account?  <Link to="/login">Login</Link>
        </Form.Text>
        </Form.Group>
        
      </Form>
    </Container>
  );  
}
  