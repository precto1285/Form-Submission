// Contact Constructor
function Contact(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
};

// UI Constructor
function UI() { }


//Add Contact
UI.prototype.addContact = function (contact) {
  const list = document.getElementById('contact-list'); //target table location
  const row = document.createElement('tr'); //create a new table row element
  //create columns and show new table data
  row.innerHTML = `
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td>${contact.email}</td>
    <td><a href="#" class="delete">Delete</a></td>
  `;

  list.appendChild(row);
}

//Delete Contact
UI.prototype.deleteContact = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Form
UI.prototype.clearForm = function () {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
}

//Show Alert
UI.prototype.showAlert = function (specialAlert, className) {
  //create div
  const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(specialAlert));
  //get parent
  const container = document.querySelector('.container');
  //get form
  const form = document.querySelector('#contact-form');
  //insert alert
  container.insertBefore(div, form);

  //set timeout for 5 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 5000);
}



// Event listener to add Contact
document.getElementById('contact-form').addEventListener('submit', (e) => {

  //obtain value from form submission
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  //instantiate contact
  const contact = new Contact(firstName, lastName, email);

  //instantiate UI
  const ui = new UI();

  //validation
  if (firstName === '' || lastName === '' || email === '') {
    ui.showAlert('Please fill in ALL fields', 'bg-danger text-white');
  }
  else {
    ui.addContact(contact);
    ui.showAlert('Contact Added', 'bg-warning')
    ui.clearForm();
  }
  e.preventDefault();
});



// Event listener to delete contact
document.getElementById('contact-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteContact(e.target);
  ui.showAlert('Contact Deleted', 'bg-secondary')

  e.preventDefault();
});
