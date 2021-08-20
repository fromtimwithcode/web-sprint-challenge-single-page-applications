import React from 'react'
import { useHistory } from 'react-router-dom'
import './App.css'
 
export default function Home(){
    const history = useHistory()
 
    const routeToForm = () => {
        history.push('/pizza')
    }
    
    return (
        <div className='home-container'>
            <h1>Welcome to Timbo's Eatzerria</h1>
            <button
                onClick={routeToForm}
                className="form-button"
            >
            Order Now
            </button>
        </div>
    )
}