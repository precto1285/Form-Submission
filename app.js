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

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  console.log(firstName, lastName, email);

  e.preventDefault();
});
