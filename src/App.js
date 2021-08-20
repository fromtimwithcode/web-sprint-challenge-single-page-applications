import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import './App.css';
import axios from 'axios';
import schema from './formSchema';
import * as yup from 'yup';
 
const initialFormValues = {
  size: '',
 
  sausage: false,
  pepperoni: false,
  peppers: false,
  olives: false,
 
  instructions: '',
  name: '',
}
const initialFormErrors = {
  name: '',
}
const initialPizzas = []
const initialDisabled = true
 
 
const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizzas([...pizzas, res.data])
      console.log([...pizzas, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
     })
}
 
const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch (err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
     
}
 
const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}
 
const formSubmit = () => {
  const newPizza = {
    size: formValues.size.trim(),
    instructions: formValues.instructions.trim(),
    name: formValues.name.trim(),
    toppings: ['sausage', 'pepperoni', 'peppers', 'olives'].filter(tops => formValues[tops]),
  }
  postNewPizza(newPizza)
}
 
useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])
 
  return (
    <div>
      <nav>
        <div class="navTitle">
          <h2>Timbo's Eatzerria</h2>
        </div>
        <div class="navLinks">
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route exact route path='/' >
          <Home />
        </Route>
       </Switch>
       
        
      
   
    </div>
  )
}
export default App;