import React from 'react';
import {useNavigate} from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="App-nav">
            <p>
            <button onClick={() => {navigate('/')}} class = "bn54" 
          >
            <span class="bn54span">Home</span></button>  &nbsp; &nbsp;
            <button onClick={() => {navigate('/VibeCheck')}} class = "bn54" 
          >
            <span class="bn54span">Vibe Check</span></button> &nbsp; &nbsp;
           
            <button onClick={() => {navigate('/PastVibes')}} class = "bn54" 
          >
            <span class="bn54span">Past Vibes</span></button> &nbsp; &nbsp;
            <button onClick={() => {navigate('/Calendar')}} class = "bn54" 
          >
            <span class="bn54span">Calendar</span></button>
            </p>
        </nav>
    );
  }
export default Navigation;