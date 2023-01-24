import displayItems from './displayList';
import { getLocalStorage } from './LocalStorage';

const handleDisplay = () => {
  displayItems(getLocalStorage());

  // clear all completed fuctionality
};
export default handleDisplay;
