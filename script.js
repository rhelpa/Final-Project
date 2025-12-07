

let inventory = [];


let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // initialize html form input values
    let dateAdded = document.querySelector('#dateAdded').value;
    let itemName = document.querySelector('#itemName').value;
    let itemQuantity = document.querySelector('#itemQuantity').value;
    let itemCost = document.querySelector('#itemCost').value;

    if (!dateAdded || !itemName || !itemQuantity || !itemCost) {
    alert("Please complete all fields before adding an item.");
    return;
    }

    // define inventory item dictionary object
    let inventoryItem = {
        date: dateAdded,
        name: itemName,
        quantity: parseInt(itemQuantity),
        cost: parseFloat(itemCost)
    };

    // append new item to inventory array
    inventory.push(inventoryItem);

    let success_message = document.createElement('span');
    success_message.style.display = 'inline-block';
    success_message.style.marginLeft = '40%';
    success_message.textContent = ' Item added!';
    success_message.style.color = 'green';
    success_message.style.fontWeight = 'bold';

    // shows green check image briefly when item is added before using timeout to remove it
    let green_check = document.createElement('img');
    green_check.src = 'green_check.png';
    green_check.alt = 'Item added';
    green_check.style.width = '100px';
    green_check.style.height = '100px';
    green_check.style.display = 'inline-block';
    green_check.style.marginLeft = '35%';
    form.appendChild(green_check);
    form.appendChild(success_message);
    setTimeout(function() {
        form.removeChild(green_check);
        form.removeChild(success_message);
    }, 2000);

    // reset form fields
    form.reset();

    // render most current inventory & totals
    renderInventory();
    }
);


function addToInventory() {
    // initialize/clear inventory summary section
    let inventorySummary = document.querySelector('#inventorySummary');
    inventorySummary.innerHTML = '';

    // iterate through inventory array; creates li & remove button for each item & appends to summary
    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];

        let liItem = document.createElement('li');
        liItem.textContent = `Date: ${item.date} ||
        Item: ${item.name} ||
        Quantity: ${item.quantity} ||
        Price: $${item.cost.toFixed(2)}
         `;

         // create x_mark image & remove button for each item, along with event listener to remove item on click
        let x_mark = document.createElement('img');
        x_mark.src = 'x_mark.png';
        x_mark.alt = 'Remove item';
        x_mark.classList.add('hover-x'); // class for hover effect
        x_mark.style.width = '20px';
        x_mark.style.height = '20px';
        x_mark.style.display = 'inline-block';
        x_mark.style.marginLeft = '10px';
        x_mark.addEventListener('click', function () {
            removeItem(i);
        });

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeItem(i);
        });

        liItem.appendChild(removeButton);   // attach the remove button to the <li>
        liItem.appendChild(x_mark);        // attach the x_mark image to the <li>
        
        inventorySummary.appendChild(liItem); // attach the <li> to the inventory summary

    }
}

function removeItem(index) {
    inventory.splice(index, 1);
    renderInventory();
}

function calculateTotals() {
    // initialize
    let totalQuantity = 0;
    let totalValue = 0.0;

    // iterate through inventory
    inventory.forEach(function(item) {
        totalQuantity += item.quantity;
        totalValue += item.quantity * item.cost;
    }
);

    // display calculated totals in DOM
    document.querySelector('#totalQuantity').textContent = `Total Items On Hand: ${totalQuantity}`;

    document.querySelector('#totalValue').textContent = `Total Cost: $${totalValue.toFixed(2)}`;
}      

// displays inventory and  totals
function renderInventory() {
    addToInventory();
    calculateTotals();
}

renderInventory();