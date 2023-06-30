window.addEventListener('load', function() {
    // Fetch the burn overview data from the provided URL
    fetch('https://api.solscan.io/account/3cdYk6iutMXFceZ7thsoggcLsyuJBgJxmDFuZx4NDtpyjc4hXxFyvn8qpSKCk3grb3zAXFCCucNbAxKL97z3EwF4')
        .then(response => response.json())
        .then(data => {
            // Extract the burn overview from the data
            const burnOverview = data.account.data[0].parsed.instructions;
            
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
                
                cell1.textContent = burn.transactionSignature;
                cell2.textContent = burn.parsed.data.value.amount;
                
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
