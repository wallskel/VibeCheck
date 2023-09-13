import React from 'react';
import {useNavigate} from 'react-router-dom';
import DateTitle from '../components/DateTitle';
import GetMoodGhost from '../components/GetMoodGhost';

function ViewVibePage({dateToView}){
    const navigate = useNavigate();

    const onDelete = async _id => {
        const confirmation = window.confirm('Are you sure you want to delete this entry?');
        if (confirmation){
            const response = await fetch(`/entries/${dateToView._id}`, {method: 'DELETE'})
            if(response.status === 204){
                navigate('/PastVibes');
            }else{
                console.error(`Failed to delete entry with _id = ${_id}, status code = ${response.status}`)
            }}
        else{}
    };

    return(
        <fieldset>
            <h1><DateTitle dateToView = {dateToView}></DateTitle></h1>
            <p>
        <fieldset>
        <legend>Overall Vibe:</legend>
        <GetMoodGhost dateToView={dateToView}></GetMoodGhost>
        </fieldset>
        </p>
        <p>
        <fieldset>
            <legend id='legend1'>Journal Entry:</legend>
            <fieldset>{dateToView.journalEntry}</fieldset>
            </fieldset>
            </p>
            <button onClick={() => onDelete(dateToView)} class = "bn54" 
              > Delete </button>&nbsp; &nbsp;

            <button onClick={() => navigate("/EditVibe")} class = "bn54" 
              >Edit</button>
           
            </fieldset>
        )};
        

export default ViewVibePage;

