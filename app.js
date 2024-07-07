document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const shoppingList = document.getElementById('shoppingList');

    // Load saved items from local storage or initialize an empty array
    let items = JSON.parse(localStorage.getItem('shoppingListItems')) || [];

    // Function to update local storage with the current items array
    function updateLocalStorage() {
        localStorage.setItem('shoppingListItems', JSON.stringify(items));
    }

    // Function to render the list of items
    function renderList() {
        // Clear the current list in the DOM
        shoppingList.innerHTML = '';

        // Iterate over each item and create the corresponding DOM elements
        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            const textNode = document.createElement('span');
            textNode.textContent = `${item.name} (${item.quantity})`;
            listItem.appendChild(textNode);

            // Apply the 'purchased' class if the item is marked as purchased
            listItem.classList.toggle('purchased', item.purchased);

            // Create and configure the 'Edit' button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const newName = prompt('Edit item name:', item.name);
                const newQuantity = prompt('Edit item quantity:', item.quantity);
                if (newName && newQuantity && !isNaN(newQuantity)) {
                    items[index].name = newName;
                    items[index].quantity = newQuantity;
                    updateLocalStorage();
                    renderList();
                } else {
                    alert('Please enter a valid name and quantity.');
                }
            });

            // Create and configure the 'Mark' button
            const markButton = document.createElement('button');
            markButton.textContent = 'Mark';
            markButton.addEventListener('click', (e) => {
                e.stopPropagation();
                items[index].purchased = !items[index].purchased;
                updateLocalStorage();
                renderList();
            });

            // Create and configure the 'Remove' button for individual items
            const clearItemButton = document.createElement('button');
            clearItemButton.textContent = 'Remove';
            clearItemButton.addEventListener('click', (e) => {
                e.stopPropagation();
                items.splice(index, 1);
                updateLocalStorage();
                renderList();
            });

            // Append buttons to the list item
            listItem.appendChild(editButton);
            listItem.appendChild(markButton);
            listItem.appendChild(clearItemButton);

            // Append the list item to the shopping list in the DOM
            shoppingList.appendChild(listItem);
        });
    }

    // Event listener for the 'Add' button
    addButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            const newQuantity = prompt('How many items do you want?');
            if (newQuantity && !isNaN(newQuantity)) {
                items.push({ name: newItem, quantity: newQuantity, purchased: false });
                itemInput.value = '';
                updateLocalStorage();
                renderList();
            } else {
                alert('Please enter a valid quantity.');
            }
        } else {
            alert('Please enter an item name.');
        }
    });

    // Event listener for the 'Clear List' button
    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the list?')) {
            items = [];
            updateLocalStorage();
            renderList();
        }
    });

    // Initial render of the list
    renderList();
});
