// Contact Constructor
Contact = (firstName, lastName, email) => {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
};

// UI Constructor
UI = () => { };


// Event listener to add Contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
  console.log('clicked');
  e.preventDefault();
});
