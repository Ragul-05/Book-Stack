// Selecting the necessary elements
const popupOverlay = document.getElementById('popup-overlay');
const popupBox = document.getElementById('popup-box');
const addPopupButton = document.getElementById('add-popup-button');
const cancelPopupButton = document.getElementById('cancel-popup-btn');
const addBookButton = document.getElementById('add-book-btn');
const bookTitleInput = document.getElementById('book-title-input');
const bookAuthorInput = document.getElementById('book-author-input');
const bookDescriptionInput = document.getElementById('book-description-input');
const bookContainer = document.getElementById('book-container');

// Show the popup when 'Add Book' button is clicked
addPopupButton.addEventListener('click', function () {
    popupOverlay.classList.add('active');
    popupBox.classList.add('active');
});

// Hide the popup when 'Cancel' button is clicked
cancelPopupButton.addEventListener('click', function () {
    popupOverlay.classList.remove('active');
    popupBox.classList.remove('active');
});

// Add book when the 'Add Book' button in the popup is clicked
addBookButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Get the input values
    const bookTitle = bookTitleInput.value.trim();
    const bookAuthor = bookAuthorInput.value.trim();
    const bookDescription = bookDescriptionInput.value.trim();

    // Check if all fields are filled
    if (bookTitle && bookAuthor && bookDescription) {
        // Create a new book card
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <h3>${bookTitle}</h3>
            <h5>by ${bookAuthor}</h5>
            <p>${bookDescription}</p>
            <button class="delete-btn" onclick="deleteBook(event)">Delete</button>
        `;

        // Append the new book card to the container
        bookContainer.appendChild(bookCard);

        // Clear the input fields
        bookTitleInput.value = '';
        bookAuthorInput.value = '';
        bookDescriptionInput.value = '';

        // Hide the popup
        popupOverlay.classList.remove('active');
        popupBox.classList.remove('active');
    } else {
        alert("Please fill in all fields before adding a book.");
    }
});

// Function to delete a book when the 'Delete' button is clicked
function deleteBook(event) {
    const bookCard = event.target.parentElement;
    bookCard.remove();
}

// Optional: Close popup when clicking outside the box
popupOverlay.addEventListener('click', function () {
    popupOverlay.classList.remove('active');
    popupBox.classList.remove('active');
});
