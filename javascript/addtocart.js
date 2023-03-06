


document.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName == 'BUTTON') {
      const buttonId = event.target.id;
      const pElement = document.querySelector(`#id${buttonId}`);
      const itemName = pElement.innerText;
      console.log(document.querySelector(`#id${buttonId}`))

      const sElement = document.querySelector(`#price${buttonId}`);
      const itemPrice = sElement.innerText;
      console.log(itemName);
      addToCart(itemName, itemPrice);
    }
    function addToCart(itemName, itemPrice) {
    // Create a new cart item object
    let item = {
      name: itemName,
      price: itemPrice
    };
    console.log(item)

    // Get the existing cart items from local storage or initialize it as an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Add the new item to the cart
    cartItems.push(item);
    
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show a success message to the user
    alert('Item added to cart!');
    console.log(cartItems)
  }
  });
  
  
  
  