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
Deploy your project to Vercel. Ensure that you have the Vercel CLI installed, and run the following command in your project directory:
shell
Copy code
vercel
During the deployment process, Vercel will automatically detect the serverless function in the proxy.js file and deploy it as an API route.

Once the deployment is complete, Vercel will provide you with a URL for your serverless function. You can use this URL as the endpoint to fetch the burn overview data.

Update the fetch URL in your JavaScript code to point to your serverless function endpoint. Modify the JavaScript code as follows:

javascript
Copy code
window.addEventListener('load', function() {
  // Fetch the burn overview data from the serverless function endpoint
  fetch('/api/proxy')
    .then(response => response.json())
    .then(data => {
      // Extract the burn overview from the data
      const burnOverview = data.data;

      // Display the burn overview on the webpage
      const burnInfo = document.getElementById('burn-info');
      burnInfo.innerHTML = '<h2>Burn Overview</h2>';

      // Rest of the code remains the same...
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
Ensure that you update the fetch URL to match the correct endpoint URL provided by Vercel for your serverless function.

By using a serverless function as a proxy, you can fetch the burn overview data from the API endpoint securely and display it on your website hosted on Vercel.





User
can you show entire javascript instead?
ChatGPT
Certainly! Here's the entire JavaScript code with the necessary modifications:

JavaScript (script.js):

javascript
Copy code
window.addEventListener('load', function() {
  // Fetch the burn overview data from the serverless function endpoint
  fetch('/api/proxy')
    .then(response => response.json())
    .then(data => {
      // Extract the burn overview from the data
      const burnOverview = data.data;

      // Display the burn overview on the webpage
      const burnInfo = document.getElementById('burn-info');
      burnInfo.innerHTML = '<h2>Burn Overview</h2>';

      const table = document.createElement('table');
      const tableHead = document.createElement('thead');
      const headRow = document.createElement('tr');
      const headCell1 = document.createElement('th');
      const headCell2 = document.createElement('th');

      headCell1.textContent = 'Transaction';
      headCell2.textContent = 'Amount Burned';

      headRow.appendChild(headCell1);
      headRow.appendChild(headCell2);
      tableHead.appendChild(headRow);
      table.appendChild(tableHead);

      const tableBody = document.createElement('tbody');

      burnOverview.forEach(burn => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = burn.transactionHash;
        cell2.textContent = burn.receipt.tokensBurned;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      burnInfo.appendChild(table);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
Make sure you have deployed the serverless function using Vercel, and update the fetch URL in your JavaScript code to match the correct endpoint URL provided by Vercel for your serverless function.

With this code, the website will fetch the burn overview data from the serverless function endpoint and display it on the webpage.






