import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditVibePage({dateToView}) {
  
    const [date, setDate] = useState(dateToView.date);
    const [overallMood, setMood] = useState(dateToView.overallMood);
    const [journalEntry, setJournal] = useState(dateToView.journalEntry);
  
    const navigate = useNavigate();

    const editEntry = () => {
      const confirmation = window.confirm('Are you sure you want to edit this entry?');
      if (confirmation){
      const editedVibe = {date, overallMood, journalEntry};
      const response = fetch (`/entries/${dateToView._id}`, {
        method: 'PUT',
        body: JSON.stringify(editedVibe),
        headers: {
          'Content-Type': 'application/json',
        },
      });
        alert("Succesfully edited your entry.");
        navigate("/PastVibes");
      } else{}
    };
  
  
    return (
          <form>
            <fieldset>
            <h1>Edit Entry</h1>
            <h3>Change your vibe</h3>

            <p>
            <fieldset>
              <legend>Date:</legend>
              <input type = "date" id = "date" value = {date} onChange = {e => setDate(e.target.value)}></input>
              </fieldset>
              </p>

            <p>
            <fieldset>
              <legend>Overall vibe:</legend>
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
                  onChange={e => setJournal(e.target.value)} />
            </fieldset>
            </p>

            <button onClick={() => {navigate('/PastVibes')}}class = "bn54"> Exit </button>&nbsp; &nbsp;
            <button onClick={e => {editEntry(); e.preventDefault()}}class = "bn54">Update</button>
            </fieldset>
          </form>
    );
  };
  
  
  export default EditVibePage;