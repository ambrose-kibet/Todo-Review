const getLocalStorage = () => (localStorage.getItem('todo')
  ? JSON.parse(localStorage.getItem('todo'))
  : []);
const setLocalStorage = (arr) => {
  localStorage.setItem('todo', JSON.stringify(arr));
};

export { getLocalStorage, setLocalStorage };
