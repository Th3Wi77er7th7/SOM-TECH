// JavaScript code

// Add an event listener to execute the code once the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Code to execute when the DOM is loaded
  
    // Add an event listener for the submit button in the contact form
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Retrieve the value of the name input field
      var nameInput = document.getElementById('name');
      var name = nameInput.value;
  
      // Perform any desired action with the name value
      console.log('Name:', name);
  
      // Clear the input field after submitting
      nameInput.value = '';
    });
  });
  