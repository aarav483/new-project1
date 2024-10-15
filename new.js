// Function to add product
function addProduct() {
    // Get form data
    const price = document.getElementById('price').value;
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;

    if (price && name && category) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = `${name} - $${price}`;

        // Append to correct category
        document.getElementById(category).appendChild(li);

        // Clear form inputs
        document.getElementById('price').value = '';
        document.getElementById('name').value = '';
    } else {
        alert('Please fill out all fields');
    }
}
