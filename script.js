

let inventory = [];


let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // initialize input values
    let itemName = document.querySelector('#itemName').value;
    let itemQuantity = document.querySelector('#itemQuantity').value;
    let itemCost = document.querySelector('#itemCost').value;

    // define inventory item dictionary object
    let inventoryItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        cost: parseFloat(itemCost)
    };

    // append new item to inventory array
    inventory.push(inventoryItem);
    renderInventory();
    }
);


function addToInventory() {
    // access DOM inventory summary
    let inventorySummary = document.querySelector('#inventorySummary');
    inventorySummary.innerHTML = '';

    // for loop through inventory array, creates li for each item & appends to summary
    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];

        let liItem = document.createElement('li');
        liItem.textContent = `${item.name} - Quantity: ${item.quantity}, Price: $${item.cost.toFixed(2)}`;

        inventorySummary.appendChild(liItem);
    }
}

function renderInventory() {
    addToInventory();
    calculateTotals();
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


    // display totals in DOM
    document.querySelector('#totalQuantity').textContent = `Total Items On Hand: ${totalQuantity}`;
    document.querySelector('#totalValue').textContent = `$${totalValue.toFixed(2)}`;
}      