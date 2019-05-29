// Contact Constructor
Contact = (firstName, lastName, email) => {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
};

// UI Constructor
UI = () => { };



//Add Contact
UI.prototype.addContactToTable = (contact) => {
  const list = document.getElementById('contact-list'); //target table location
  const row = document.createElement('tr'); //create a new table row
  //create columns and show new table data
  row.innerHTML = `
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td>${contact.email}</td>
    <td><button class="btn btn-primary text-white delete">Delete</button></td>
  `;

  list.appendChild(row);
}

//Delete Contact
UI.prototype.deleteContact = (target) => {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}


//Show Alert
UI.prototype.showAlert = (specialAlert, className) => {
  //create dive
  const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(specialAlert));
  //get parent
  const container = document.querySelector('.container');
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

  }
  else {

  }
  e.preventDefault();
});



// Event listener to delete contact

