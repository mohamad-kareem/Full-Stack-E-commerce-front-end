const priceRadio = document.querySelectorAll('input[name="price"]');


 function displayItems() {
 // Get the selected price range
   let minPrice = 0;
   let maxPrice = Infinity;
    for (let i = 0; i < priceRadio.length; i++) {
      if (priceRadio[i].checked) {
      const priceRange = priceRadio[i].value.split('-');
      minPrice = parseInt(priceRange[0]);
      maxPrice = parseInt(priceRange[1]);
     break;
     }
      }

 fetch('http://localhost/-Full-Stack-E-commerce--back-end-/getallphones.php')
 .then(response => response.json())
 .then(data => {
   const container = document.querySelector('#item-container');
     container.innerHTML = ''; // clear previous items   
       const rowClass = 'item-row';
       const itemClass = 'item';
        for (let i = 0; i < data.length; i += 3) {
         const row = document.createElement('div');
         row.classList.add(rowClass);

          for (let j = i; j < i + 3 && j < data.length; j++) {
           if (data[j].price >= minPrice && data[j].price <= maxPrice){

            const item = document.createElement('div');
            item.classList.add(itemClass);

            const img = document.createElement('img');
            img.src = data[j].imgurl;
            item.appendChild(img);



            const name = document.createElement('p');
            name.textContent = data[j].model;
            item.appendChild(name);

            const para = document.createElement('paragraph');
            para.textContent = `$${data[j].price}`;
            item.appendChild(para);
                                  
            const button = document.createElement('button');
            button.textContent = 'Add';
            button.style.display='inline-block';
            button.style.width='50px';
            button.style.borderRadius = '5px';
            //let shoppingCart=[];
                                   
            button.addEventListener('click', () => {
            console.log(`The clicked item is: ${data[j].model}`);
            //create an object  representing the item
            //const itemToAdd={
             // model:data[j].model,
              //price:data[j].price,
              //imgurl:data[j].imgurl
             //};
              //pushing the clicked item into the array 
                //cart.push(itemToAdd);
             //const shoppingBagIcon=document.querySelector('#bagicon');
            //shoppingBagIcon.textContent=cart.length;
             });
                                             
            item.appendChild(button);
            const button2 = document.createElement('button');
            button2.textContent = 'Save';
            button2.style.display='inline-block';
            button2.style.width = '50px';
            button2.style.borderRadius = '5px';
                                              
            button2.addEventListener('click', () => {
            console.log(`Add to Cart button clicked for item ${data[j].model}`);
         
           });
            item.appendChild(button2);
            row.appendChild(item);
           }
                                    
          }
          container.appendChild(row);
                                
        }   
                                       
      });}

    for (let i = 0; i < priceRadio.length; i++) {
      priceRadio[i].addEventListener('change', displayItems);
       }
                                
     //const cart=[];

    // Initial display of all items
    displayItems();