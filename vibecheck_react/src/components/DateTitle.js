import React from "react";

function DateTitle({dateToView}){
    const date = dateToView.date;
    const splitDate = date.split("-");
    console.log(splitDate)
    const yearString = splitDate[0];
    const dayString = splitDate[2];
    const monthString = splitDate[1];

    const getMonth = (monthString) => {
        if (monthString === "01"){
            return "January";
        }
        else if(monthString === "02"){
            return "February";
        }
        else if(monthString === "03"){
            return "March"
        }
        else if(monthString === "04"){
            return "April"
        }
        else if(monthString === "05"){
            return "May"
        }
        else if(monthString === "06"){
            return "June"
        }
        else if(monthString === "07"){
            return "July"
        }
        else if(monthString === "08"){
            return "August"
        }
        else if(monthString === "09"){
            return "September"
        }
        else if(monthString === "10"){
            return "October"
        }
        else if(monthString === "11"){
            return "November"
        }
        else if(monthString === "12"){
            return "December"
        }};

    const printMonth = getMonth(monthString);

    return(
        <>
        <div>
        {printMonth} {dayString}, {yearString}
        </div>
        </>
    )
    };

export default DateTitle;