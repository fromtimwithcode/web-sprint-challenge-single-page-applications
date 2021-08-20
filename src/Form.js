import React from 'react';
import './App.css'

export default function Form(props){
    const { values, submit, change, errors, } = props;
 
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
 
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
  
    return(
        
        <form name="pizza-form" id="pizza-form" onSubmit={onSubmit}>
            <div className="home-container">
                <h1>Build Your Own Pizza</h1>
            </div>
            <div className="form-container">
                <div>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <div className='size'>
                    <div className="size-header">
                        <h4>Choice of Size</h4>
                    </div>
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                        id='size-dropdown'
                    >
                        <option value=''>-- Select a Size Option --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
                <div className="toppings">
                    <div className="toppings-header">
                        <h4>Choice of Toppings</h4>
                    </div>
                    <label>Sausage
                        <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>
                    <label>Peppers
                        <input
                        type='checkbox'
                        name='peppers'
                        checked={values.peppers}
                        onChange={onChange}
                        />
                    </label>
                    <label>Olives
                        <input
                        type='checkbox'
                        name='olives'
                        checked={values.olives}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className="instructions">
                    <div className="instructions-header">
                        <h4>Special Instruction</h4>
                    </div>
                    <input
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'
                    id='special-text'
                    />
                </div>
                <div className="name">
                    <div className="name">
                        <h4>Enter your name</h4>
                    </div>
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    id='name-input'
                    />
                </div>
                <div className="orderBtn">
                    <button id="order-button">Add To Order</button>
                </div>
                <div className="errors">
                    <div>{errors.name}</div>
                </div>
            </div>
        </form>
    )
}