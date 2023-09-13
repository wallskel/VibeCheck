import React from "react";


function GetMoodGhost({dateToView}){
    const moodString = dateToView.overallMood

    const getImgString = (moodString) => {
        if(moodString === "1"){
            return '/sadder.png'
        }
        else if(moodString === "2"){
            return '/sad.png'
        }
        else if(moodString === "3"){
            return '/neutral.png'
        }
        else if(moodString === "4"){
            return '/happy.png'
        }
        else if(moodString === "5"){
            return '/veryhappy.png'
        }
    };


    const imgString = getImgString(moodString);

    console.log(imgString)

    return(

        <>
        <img src={process.env.PUBLIC_URL + `${imgString}`} alt='mood ghost' width="90" height="90" />
        </>
    )
};

export default GetMoodGhost;