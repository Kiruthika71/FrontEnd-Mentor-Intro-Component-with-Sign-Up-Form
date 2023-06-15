document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const firstName = document.querySelector(".fname");
    const lastName = document.querySelector(".lname");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkInput();
    });
  
    function setError(input, message) {
      const formControl = input.parentElement;
      const span = formControl.querySelector('span');
      span.innerText = message;
      formControl.className = 'form-control error'
    }
  
    function setSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success'
    }
  
    function isEmailValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function checkInput() {
      const fNameValue = firstName.value.trim();
      const lNameValue = lastName.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
  
      if (fNameValue === '') {
        setError(firstName, 'First Name cannot be empty');
      } else {
        setSuccess(firstName);
      }
  
      if (lNameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
      } else {
        setSuccess(lastName);
      }
  
      if (emailValue === '') {
        setError(email, 'Email cannot be empty');
      } else if (!isEmailValid(emailValue)) {
        setError(email, 'Invalid email address');
      } else {
        setSuccess(email);
      }
  
      if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
      } else {
        setSuccess(password);
      }
    }
});
  