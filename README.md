# VibeCheck
# Author and Designer: Kelly Walls

I created this project, called Vibe Check, to track a user's moods. The purpose of this project is for a user to log their overall mood for the day, along with the date, and a journal entry. A user can see their past logged moods by clicking 'past vibes,' which provides the user with a visual representation of their mood trends. This project uses JavaScript, React, node.js, and MongoDb to accomplish its goal.


Demonstration:
1. Home page: the home page welcomes the user and contains the menu bar providing links to Home, Vibe Check, and Past Vibes
   <img width="1153" alt="Screenshot 2023-09-13 at 5 45 56 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/a31d9b4d-62cc-4c4e-bfe7-5d51bcfd3952">

2. Vibe Check: contains the form to log the date, overall vibe, and a journal entry
   <img width="1149" alt="Screenshot 2023-09-13 at 5 46 31 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/9e0575e0-ded5-48dc-a31c-0e9aadbc9920">

   When the user hits submit, they are thanked for logging their mood. After clicking ok, they are redirected to Home.
   <img width="1150" alt="Screenshot 2023-09-13 at 5 46 53 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/c61469c7-6e48-4805-8fb5-c4776ef0bed1">

3. Past Vibes: visual representation of all past vibes, showing the date and the image associated with the mood
   <img width="1151" alt="Screenshot 2023-09-13 at 5 47 15 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/c44edb2c-513a-45da-adcf-d474c435716d">

4. When you click on one of the entries, you are redirected to that specific entry
   <img width="1143" alt="Screenshot 2023-09-13 at 5 50 05 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/1d049589-efda-4fd5-bde6-7e901bf5cfd8">
   From here, you can either delete or edit the entry, or click one of the menu bar options.

5. When you click edit, you are redirected to an edit page with the entrie's current data loaded in. You can either change the entry, or you can click exit and be directed back to the log entry.
   <img width="1144" alt="Screenshot 2023-09-13 at 5 47 55 PM" src="https://github.com/wallskel/VibeCheck/assets/130429560/037e5d90-fd6c-44af-9ffe-c2a0caaa8538">



To get this project to work:
  - create a .env file in the moods_db folder and in the vibecheck_react folder
  - in the moods_db .env file, set MONGO_CONNECT_STRING to your MongoDB link, and set PORT to a number to run on local host
  - in the vibecheck_react .env file, set PORT to a number different from the moods_db .env PORT
