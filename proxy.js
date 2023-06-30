// proxy.js

// Import the required dependencies
const fetch = require('node-fetch');

// Define the serverless function
module.exports = async (req, res) => {
  try {
    // Fetch the burn overview data from the API endpoint
    const response = await fetch('https://api.solscan.io/account/3cdYk6iutMXFceZ7thsoggcLsyuJBgJxmDFuZx4NDtpyjc4hXxFyvn8qpSKCk3grb3zAXFCCucNbAxKL97z3EwF4/txs?limit=10&offset=0');
    const data = await response.json();

    // Return the data as the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};
