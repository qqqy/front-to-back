# FRONT TO BACK 

### SETUP

- Fork the repo
- Clone the repo
- Run npm i
- npm start to get the app running
- Split the console or open a new console and run nodemon to get your server running.

*You should now have an open browser window displaying the text "OPEN THE CONSOLE", and your second console in vsCode should be displaying the text "Now listening on port 4000."*

- In server.js, require in the controller.

*Note that the controller has a .test method. If you'd like to make sure it's working correctly before you add endpoints, invoke the test method and you should see a console log in your vsCode console*

- In App.js, import axios.

### OBJECTIVE
   Switch to your browser page. With the console open, click the "Check Solution" button. The console will name three of the properties on state, and their current value ("Unfinished"). Each of these properties has a corresponding controller method on your server: basicFunction for basic, queryFunction for query, and paramFunction for param. For each property:

   - Create an endpoint in server.js, and pass-in the correct function
   - Make an axios.get request to the endpoint in App.js. You'll code your call in the componentDidMount function.
   - Use .then after the call to set res.data to the correct property on state.
   - The query function will check for a query with a key of "key." The value can be any string.
   - Likewise, the param function will check for a parameter with a key of "key". The value can be any string.

Start with the "basic" property. Test by refreshing your browser, then clicking "Check Solution". Once a property is successfully completed, the value will change from "Unfinished" to "Completed!". 

**REMEMBER:** You can reference previous projects or search chrome for proper syntax. 

### STRETCH OBJECTIVE
The controller has a method called "sort" that can handle any of the endpoints. This allows you to combine the query endpoint and the param endpoint. See if you can get it working.

