import handleDisplay from './handleDisplay';
import './index.css';
import { getLocalStorage, setLocalStorage } from './LocalStorage';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formInput.value) {
    return;
  }
  const tempId = new Date().getTime();
  const task = {
    index: tempId,
    description: formInput.value,
    completed: false,
  };
  const newValues = [...getLocalStorage(), task];
  formInput.value = '';
  setLocalStorage(newValues);
  handleDisplay();
});
window.addEventListener('DOMContentLoaded', () => {
  handleDisplay();
});
