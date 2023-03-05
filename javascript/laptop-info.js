fetch('http://localhost/-Full-Stack-E-commerce--back-end-/getalllaptops.php')
.then(response => response.json())
.then(data => {
  const container = document.querySelector('#container-showroom');
  const rowClass = 'item-row';
  const itemClass = 'item';

  for (let i = 0; i < data.length; i += 3) {
  const row = document.createElement('div');
  row.classList.add(rowClass);

    for (let j = i; j < i + 3 && j < data.length; j++) {
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
           button.addEventListener('click', () => {
             console.log(`Button clicked for item ${data[j].model}`);
            
                 });
                 
                 item.appendChild(button);
                 const button2 = document.createElement('button');
                  button2.textContent = 'Save';
                  button2.addEventListener('click', () => {
                 console.log(`Add to Cart button clicked for item ${data[j].model}`);

                    });
                   item.appendChild(button2);
        row.appendChild(item);
      
        
    }
    container.appendChild(row);
    }            
});