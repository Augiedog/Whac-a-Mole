# Whac-a-Mole

This Web App, was developed as a React-based Whac-a-Mole game, but later wrapped the react build with a nodeJS serverless backend that handles the high score database on MondoDB.
The game is really fun to play, so there is a deployment. I encourage you to set the high score yourself!
<sub>Hosting Provided thru Netlify</sub>
<p align="center">you can <a href="https://gorgeous-genie-657fdc.netlify.app"><b>Play</b></a> the Game here</p>
[![Netlify Status](https://api.netlify.com/api/v1/badges/18f2f102-27e5-4aaa-a63d-71e6169f8eb1/deploy-status)](https://app.netlify.com/sites/gorgeous-genie-657fdc/deploys)

Some things I learned while making this:
- Generate components dynamically.
- Use state to track the score and mole status.
- Utilize the useEffect hook to govern the mole (component) lifecycle.
- Utilize the useState to hold object from back end
- hosting a backend on netlify
- making a serverless function 