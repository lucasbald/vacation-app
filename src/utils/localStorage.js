const saveToLocalStorage = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = ({ key }) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const removeFromLocalStorage = ({ key }) => {
  localStorage.removeItem(key);
};

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
