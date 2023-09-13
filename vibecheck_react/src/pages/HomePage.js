import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();

    return (
       <fieldset>
        <h1>Welcome to vibe checker </h1>
        <table>
          <tr>
            <td>Vibe checker is a mood tracker app.<br></br> Click "VIBE CHECK" to get started 
              <br></br>and add a new entry to your vibe log.<br></br>Click "PAST VIBES" to view past entries.</td>
            <td><img src={process.env.PUBLIC_URL + '/flower.png'} alt='happy' width="150" height="150" /></td>
          </tr>
        </table>
       </fieldset>
    );
  }

export default HomePage;