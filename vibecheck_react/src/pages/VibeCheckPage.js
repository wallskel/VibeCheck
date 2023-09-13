import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function VibeCheckPage(){
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [overallMood, setMood] = useState('');
  const [journalEntry, setJournal] = useState('');


  // code to add a new vibe entry
  const addEntry = async () => {
    const newEntry = {date, overallMood, journalEntry};
    const response = await fetch ('/entries', {
      method: 'POST',
      body: JSON.stringify(newEntry),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201){
      alert("Thank you for checking in!");
    } else{
      alert(`Failed to log entry, status code = ${response.status}`);
    }
    navigate("/");
    };


return (
  <>
      <form>
        <fieldset>
          <h1>New Vibe Check</h1>
          <h3>Add a new vibe</h3>

          <p>
            <fieldset>
              <legend> Select Date: </legend>
              <input type = "date" id = "date" value = {date} onChange = {e => setDate(e.target.value)}></input>
          </fieldset>
          </p>

          <p>
          <fieldset>
            <legend>Select a Overall vibe:</legend>
            <input type = "radio" id = "sadder" name = "overallMood" value = "1" onChange = {e => setMood(e.target.value)} class="input-hidden"/> 
              <label for="sadder">
              <img src={process.env.PUBLIC_URL + '/sadder.png'} alt='sadder' width="100" height="100" />
              </label>
            <input type = "radio" id = "sad" name = "overallMood" value = "2" onChange = {e => setMood(e.target.value)} class="input-hidden"/> 
              <label for="sad">
              <img src={process.env.PUBLIC_URL + '/sad.png'} alt='sad' width="100" height="100" />
              </label>
            <input type = "radio" id = "neutral" name = "overallMood" value = "3" onChange = {e => setMood(e.target.value)} class="input-hidden"/> 
              <label for="neutral">
              <img src={process.env.PUBLIC_URL + '/neutral.png'} alt='sadder' width="100" height="100" />
              </label>
            <input type = "radio" id = "happy" name = "overallMood" value = "4" onChange = {e => setMood(e.target.value)} class="input-hidden"/> 
              <label for="happy">
              <img src={process.env.PUBLIC_URL + '/happy.png'} alt='happy' width="100" height="100" />
              </label>
            <input type = "radio" id = "happier" name = "overallMood" value = "5" onChange = {e => setMood(e.target.value)} class="input-hidden"/> 
              <label for="happier">
              <img src={process.env.PUBLIC_URL + '/veryhappy.png'} alt='happier' width="100" height="100" />
              </label>
          </fieldset>  
          </p>

          <p>
          <fieldset>
            <legend>Journal entry:</legend>
            <input type="text" value={journalEntry}
              onChange={e => setJournal(e.target.value)} id="journal-input"/>
            </fieldset>
          </p>
          
          <button onClick={() => {navigate('/')}}class = "bn54" > Exit </button> &nbsp; &nbsp;
          <button onClick={e => {addEntry(); e.preventDefault()}} class = "bn54">Submit</button>
        </fieldset>
      </form>
      </>
)};

export default VibeCheckPage