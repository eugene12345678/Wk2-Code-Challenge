# WK2-CODE-CHALLENGE
## Interactive Shopping List Application
### Introduction
This challenge combines array iteration, DOM manipulation, and event handling to create an interactive shopping list application.

### Objective:
Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

### Requirements:
Array: Maintain a JavaScript array to store shopping list items.

#### DOM Manipulation:
- Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
- Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
- Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

#### Event Handling:
- Attach event listeners to the "Add" button to capture user input and add items to the list.
- Attach event listeners to the list of items to allow users to mark them as purchased.
- Attach an event listener to the "Clear List" button to remove all items from the list.

### Prerequisites
- To run the application, you need a modern web browser that supports JavaScript and HTML5 eg chrome, brave, firefox etc

### Installation
1. Clone the repository or download the ZIP file.
```bash
git clone git@github.com:eugene12345678/Wk2-Code-Challenge.git
```
2. Navigate to the project directory.
```bash
cd wk2-code-challenge
```
3. Open the index.html file in your preferred web browser.
### Usage
#### Adding Items
- Enter the name of the item in the input field.
- Click the "Add" button.
- A prompt will ask for the quantity of the item.
- The item will be added to the list with the specified quantity.
#### Editing Items
- Click the "Edit" button next to the item you want to edit.
- A prompt will ask for the new name and quantity of the item.
- The item details will be updated in the list.
#### Marking Items as Purchased
- Click the "Mark" button next to the item you want to mark as purchased.
- The item will be visually updated to indicate it has been purchased.
#### Removing Items
- Click the "Remove" button next to the item you want to remove.
- The item will be removed from the list.
#### Clearing the List
- Click the "Clear List" button to remove all items from the list.
- A confirmation prompt will appear to confirm the action.
- If confirmed, the entire list will be cleared.
#### Bonus Features
- Editing Items: Users can edit both the name and quantity of existing items.
- Persistence with Local Storage: The shopping list is saved to local storage and remains available even after the page is reloaded.
#### Learning Outcomes
- `Array Iteration`: Understanding how to iterate through arrays to manipulate list items.
- `DOM Manipulation`: Gaining experience in dynamically modifying the DOM based on user interaction.
- `Event Handling`: Reinforcing the use of event listeners to create interactive applications.
#### Technologies Used
HTML, CSS, JavaScript

##### You can view my site here
https://eugene12345678.github.io/Wk2-Code-Challenge/
#### AUTHOR
- Eugene Mathenge