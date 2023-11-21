import { db } from '../_utils/firebase';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';

async function getItems() {
    const db = getFirestore();

    try {
      const userItemsCollection = collection(db, 'users', userId, 'items');
  
      const q = query(userItemsCollection);
  
      const querySnapshot = await getDocs(q);
  
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          itemId: doc.id,
          data: doc.data(),
        });
      });
  
      return items;
    } catch (error) {
      console.error('Error getting items:', error.message);
      throw error;
    }
}

async function addItem(userId, newItem) {
    const db = getFirestore();

    try {
      const userItemsCollection = collection(db, 'users', userId, 'items');
  
      const docRef = await addDoc(userItemsCollection, newItem);
  
      return docRef.id;
    } catch (error) {
      console.error('Error adding item:', error.message);
      throw error;
    }
}

export { getItems, addItem };