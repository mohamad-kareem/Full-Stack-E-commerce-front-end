// Get the cart items from local storage
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

// Get the table body element
let tableBody = document.querySelector('#cart-items');

// Loop through the cart items and create a row for each item
for (let i = 0; i < cartItems.length; i++) {
  // Create a new table row
  let row = document.createElement('tr');
  
  // Create a new table cell for the item name
  let nameCell = document.createElement('td');
  nameCell.innerText = cartItems[i].name;
  
  // Create a new table cell for the item price
  let priceCell = document.createElement('td');
  priceCell.innerText = cartItems[i].price;
  
  // Add the cells to the row
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  
  // Add the row to the table body
  tableBody.appendChild(row);
}