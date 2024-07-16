const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

populateFormArea();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value.trim();
  const message = formElements.message.value.trim();

  if (mail === '' || message === '') {
    alert(`Fill please all fields`);
  } else {
    console.log(formData);
  }

  localStorage.removeItem(STORAGE_KEY);

  formData = { email: '', message: '' };

  event.currentTarget.reset();
}

function populateFormArea() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    form['email'].value = savedData['email'];
    form['message'].value = savedData['message'];
  }
}
