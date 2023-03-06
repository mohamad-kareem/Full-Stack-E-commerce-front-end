// Get the cart items from local storage
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

// Get the table body element
let tableBody = document.querySelector('#cart-items');

// Initialize total variable
let total = 0;

// Loop through the cart items and create a row for each item
for (let i = 0; i < cartItems.length; i++) {
  // Create a new table row
  let row = document.createElement('tr');
  
  // Create a new table cell for the item name
  let nameCell = document.createElement('td');
  nameCell.innerText = cartItems[i].name;
  
  // Create a new table cell for the item price
  let priceCell = document.createElement('td');
  let price = parseFloat(cartItems[i].price.replace('$', ''));
  priceCell.innerText = '$' + price.toFixed(2);
  total += price;
  
  // Create a new table cell for the remove button
  let removeCell = document.createElement('td');
  let removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', function() {
    // Remove the item from the cartItems array
    cartItems.splice(i, 1);
    // Update the cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Remove the row from the table
    tableBody.removeChild(row);
    // Recalculate the total
    total -= price;
    totalCell.innerText = '$' + total.toFixed(2);
  });
  removeCell.appendChild(removeButton);
  
  // Add the cells to the row
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(removeCell);
  
  // Add the row to the table body
  tableBody.appendChild(row);
}

// Create a new table row for the total
let totalRow = document.createElement('tr');
let totalLabelCell = document.createElement('th');
totalLabelCell.innerText = 'Total';
let totalCell = document.createElement('th');
totalCell.innerText = '$' + total.toFixed(2);
totalRow.appendChild(totalLabelCell);
totalRow.appendChild(totalCell);
tableBody.appendChild(totalRow);
