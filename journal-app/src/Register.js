import './App.css';
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


export function Register(){
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
    const {userName, userEmail, userPassword, confirmPassword} = form
    const newErrors = {}

    if(!userName || userName === '') newErrors.userName = 'Please enter your username'
      //TO DO add error for if username already exists

    if (!userEmail || userEmail === '') newErrors.userEmail = 'Please enter your email'
    else if (!String(userEmail).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) newErrors.userEmail = 'Please enter a valid email'

    if(!userPassword || userPassword === '') newErrors.userPassword = 'Please enter your password'
    else if(userPassword.length < 8) newErrors.userPassword = 'Please ensure your password is more than 8 characters'

    if(!confirmPassword || confirmPassword === '') newErrors.confirmPassword = 'Please confirm your password'
    else if(userPassword !== confirmPassword) newErrors.confirmPassword = 'Your passwords do not match. Please confirm your password'
    else if(confirmPassword.length < 8) newErrors.confirmPassword = 'Please ensure your password is more than 8 characters'
    
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    if(Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }
    else{
      console.log("no errors")
      console.log(form)
    }
  }

  return(
    <Container id= "main-container" className = "d-grid h-100">
    <Form id = "sign-up-form" className = "text-center w-100">
    
      <h1 className='mb-3 fs-3 fw-normal'>Register</h1>

      <Form.Group className="mb-2" controlId='userName'>
        <Form.Control 
        type="text" 
        size='lg' 
        placeholder='Username' 
        className='position-relative' 
        value = {form.userName}
        onChange={e => setField('userName', e.target.value)} 
        isInvalid={!!errors.userName} required />

        <Form.Control.Feedback type='invalid'>
          {errors.userName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-2' controlId='userEmail'>
        <Form.Control 
        type= "email" 
        size='lg' 
        placeholder='Email Address' 
        className='position-relative'
        value = {form.userEmail}
        onChange={e => setField('userEmail', e.target.value)} 
        isInvalid={!!errors.userEmail} required/>

        <Form.Control.Feedback type='invalid'>
          {errors.userEmail}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-2' controlId='userPassword'>
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

      <Form.Group className='mb-4' controlId='confirmPassword'>
        <Form.Control 
        type= "password" 
        size='lg' 
        placeholder='Confirm Password' 
        className='position-relative'
        value = {form.confirmPassword}
        onChange={e => setField('confirmPassword', e.target.value)} 
        isInvalid={!!errors.confirmPassword} required/>

        <Form.Control.Feedback type='invalid'>
          {errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>

      <div className='d-grid'>
        <Button 
        className= 'mb-2'
         variant='primary' 
         type="submit" 
         size='lg'
         onClick={handleSubmit}
        >
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
  