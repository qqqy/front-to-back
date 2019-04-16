# FRONT TO BACK 

### SETUP

- Fork the repo
- Clone the repo
- Run `npm install`
- `npm start` to get the app running
- Split the console or open a new console and run `nodemon` to get your server running.

*You should now have an open browser window displaying the text `OPEN THE CONSOLE`, and your second console in vsCode should be displaying the text `Now listening on port 4000.`*

- In server.js, require in the controller.

*Note that the controller has a `.test` method. If you'd like to make sure it's working correctly before you add endpoints, invoke the test method above your listener and you should see a console log in your vsCode console*

- In App.js, import axios.

### OBJECTIVE
   Switch to your browser page. With the console open, click the "Check Solution" button. The console will name three of the properties on state, and their current value ("Unfinished"). Each of these properties has a corresponding controller method on your server: basicFunction for basic, queryFunction for query, and paramFunction for param. For each property:

   - Create an endpoint in server.js, and pass-in the correct function
   - Make an `axios.get` request to the endpoint in App.js. You'll code your call in the `componentDidMount` function.
   - Use `.then` after the call to set res.data to the correct property on state.
   - The query function will check for a query with a key of "key." The value can be any string.
   - Likewise, the param function will check for a parameter with a key of "key". The value can be any string.

Start with the "basic" property. Test by refreshing your browser, then clicking "Check Solution". Once a property is successfully completed, the value will change from "Unfinished" to "Completed!". 

**REMEMBER:** You can reference previous projects or search chrome for proper syntax. 

### STRETCH OBJECTIVE
The controller has a method called `.sort` that can handle any of the endpoints. This allows you to combine the query endpoint and the param endpoint. See if you can get it working.

### REFERENCE
#### How to Make A Parameter

On the endpoint: `app.post("/api/your_own_path/:key" , yourController.yourControllerFunction)`\
In the request: `axios.post("/api/your_own_path/the_value")`\
In the controller function: `req.params.key`\

The example above would create a key/value pair in the req.params object. The key would be `key` and the value would be `"the_value"`. In the example above, the key would always be `key`, but we can change the value in the request:

If `axios.post("/api/your_own_path/different_value")`, the value would be `"different_value"`. Likewise,\
If `axios.post("/api/your_own_path/5")`, the value would be `"5"`. But\
If `axios.post("/api/your_own_path")`, because we haven't defined a value, the request wouldn't match the endpoint at all, and would either hit a different endpoint or return a 400 error.

**Remember:** In the controller function, the values of both parameters and queries will always be strings.\
**Remember:** Both parameters and queries can be used in all request types, including `post`, `get`, `put`, and `delete`.\
**Remember:** You don't have to write your value directly into the string. You can concatenate it onto the end, or insert it using `${value}` in a backticks string.\

#### How to Make a Query

On the endpoint: `app.post("/api/your_own_path" , yourController.yourControllerFunction)`. The endpoint doesn't require any special preparation.\\
In the request: `axios.post("/api/your_own_path?key=the_value")`\
In the controller function: `req.query.key`\

The example above would create a key/value pair in the req.query object. The key would be `key` and the value would be `"the_value"`. In the example above, the key would be `key`, but we can change both the key and the value in the request:

If `axios.post("/api/your_own_path?different_key=different_value")`, the key would be `different_key` and the value would be `"different_value"`. In the controller function, we would have to access it using `req.query.different_key`. Likewise,\
If `axios.post("/api/your_own_path?id=5")`, the would be a *string* of 5, *not* the number 5, and you would access it using `req.query.id`. And unlike a parameter,\
If `axios.post("/api/your_own_path")`, it would still activate the endpoint, just without any key/value pairs in `req.query`. This can be a double-edged sword, so if you plan to use queries, make sure the endpoint can recognize them, but does not *require* them.\

**Remember:** In the controller function, the values of both parameters and queries will always be strings.\
**Remember:** Both parameters and queries can be used in all request types, including `post`, `get`, `put`, and `delete`.\
**Remember:** You don't have to write your value directly into the string. You can concatenate it onto the end, or insert it using `${value}` in a backticks string.\

