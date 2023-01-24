import displayList from './displayList';
import { getLocalStorage } from './LocalStorage';

const handleDisplay = () => {
  displayList(getLocalStorage());

  // clear all completed fuctionality
};
export default handleDisplay;
