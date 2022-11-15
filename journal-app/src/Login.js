import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './App.css';

export function Login(){
  const [form, setForm] = useState({}) //initialise variable form with empty object and the handler setForm
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form, //preserve whatever is inside the form object
      [field]: value //if there is a not a field already existing in the form object it will create that field and add the value otherwise it will just update the value for that field
    })

    if(!!errors[field]){
      setErrors({
        ...errors,
        [field]: null
      })
    }
  }

  const validateForm = () => {
    const {userEmail, userPassword} = form
    const newErrors = {}

    if(!userEmail || userEmail === '') newErrors.userEmail = 'Please enter your email'
    if(!userPassword || userPassword === '') newErrors.userPassword = 'Please enter your password'
    else if(userPassword.length < 8) newErrors.userPassword = 'Please ensure your password is more than 8 characters'
    //TO DO add error for if the inputted username and password matches an existing user

    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    console.log("formErrors", formErrors)
    if(Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }
    else{
      console.log("no errors")
      console.log(form)
    }
  }

  return (
    <Container id= "main-container" className = "d-grid h-100">
      <Form id = "sign-in-form" className = "text-center w-100">
      
        <h1 className='mb-4 fs-3 fw-normal'> Please Sign In</h1>

        <Form.Group className="mb-2" controlId='userEmail'>
          <Form.Control 
          type="email" 
          size='lg' 
          placeholder='Email Address' 
          autoComplete='userEmail'
          className='position-relative'
          value = {form.userEmail}
          onChange={e => setField('userEmail', e.target.value)} 
          isInvalid={!!errors.userEmail} required />

        <Form.Control.Feedback type='invalid'>
          {errors.userEmail}
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-4' controlId='userPassword'>
          <Form.Control 
          type= "password" 
          size='lg' 
          placeholder='Password' 
          className='position-relative'
          value = {form.userPassword}
          onChange={e => setField('userPassword', e.target.value)} 
          isInvalid={!!errors.userPassword} required/>

          <Form.Control.Feedback type='invalid'>
          {errors.userPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <div className='d-grid'>
          <Button className= 'mb-2'variant='primary' type="submit" size='lg' onClick={handleSubmit}>
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