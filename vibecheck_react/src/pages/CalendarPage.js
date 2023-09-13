import React, { useState } from 'react';
import Calendar from 'react-calendar';



function CalendarPage(){

    const [value, onChange] = useState(new Date());

    return (
      <fieldset>
        <Calendar onChange={onChange} value={value} />
      </fieldset>
    );
  };


export default CalendarPage;

