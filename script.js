

let inventory = [];


let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // initialize html form input values
    let dateAdded = document.querySelector('#dateAdded').value;
    let itemName = document.querySelector('#itemName').value;
    let itemQuantity = document.querySelector('#itemQuantity').value;
    let itemCost = document.querySelector('#itemCost').value;

    // define inventory item dictionary object
    let inventoryItem = {
        date: dateAdded,
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

    // iterate through inventory array; creates li & remove button for each item & appends to summary
    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];

        let liItem = document.createElement('li');
        liItem.textContent = `${item.date} || ${item.name} - Quantity: ${item.quantity}, Price: $${item.cost.toFixed(2)}`;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeItem(i);
        });

        liItem.appendChild(removeButton);   // attach the button to the <li>
        inventorySummary.appendChild(liItem);

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


// script.js:

//     JavaScript Events

//         Use at least three event-driven interactions (click, change, input, mouseover), wired to DOM elements.

//     Array Usage

//         Use at least one array to store data that is meaningfully used in the program (list of products, options, pages of text, restaurants).

//         The array can be static or partially populated from user input.

//     Form-Based Interaction

//         Include at least one HTML form that captures user data (text input, select, radio buttons, checkboxes, range sliders).

//         Form submissions or input changes must trigger behavior in your JavaScript (validation, filtering, calculation, or personalization).

//     Image Interactivity

//         At least one image must be changed or altered based on user interaction. Examples: swap image source, change size, apply a CSS class that animates/filters the image, hide/show an image.

//     Loop

//         Use at least one loop (for, while, for…of, etc.) to process or display data (for example, building a list from an array).

//     Conditional Logic

//         Use at least one conditional (if, else if, switch, etc.) that changes program behavior depending on user input or state.

//     DOM Manipulation – Create Content

//         Use JavaScript DOM methods to create new elements or text nodes and insert them into the page (dynamically build a list, cards, messages).

//     DOM Manipulation – Styling/Classes

//         Use JavaScript to change the appearance or layout of elements by adding/removing/changing CSS classes or styles (show/hide sections, highlight active choices).

//     Functions

//         Write at least three named functions (not counting anonymous arrow functions directly assigned as event listeners or timers).

//         These functions should encapsulate meaningful tasks ( example: calculateTotal(), renderResults(), loadPage(pageIndex)).

//     Code Quality

//         Use meaningful variable and function names.

//         Include clear comments explaining non-obvious logic.

//         Remove all debugging statements like console.log before submission.
