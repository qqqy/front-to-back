#FRONT TO BACK

The goal will be to connect the front end of this app with the backend. Start by requiring-in the controller file.

For each property on state:

1. Create a get endpoint. For query, use a query. For param, use a param.
2. In App.js, import axios
3. Call the endpoint in componentDidMount and set res.data to the corresponding property on state.