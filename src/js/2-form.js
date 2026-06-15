const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);

const formData = savedData
  ? JSON.parse(savedData)
  : {
      email: '',
      message: '',
    };

refs.form.elements.email.value = formData.email;
refs.form.elements.message.value = formData.message;

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
refs.form.addEventListener('submit', e => {
  e.preventDefault();

  if (Object.values(formData).includes('')) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  refs.form.reset();
});
