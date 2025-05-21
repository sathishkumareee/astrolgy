import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Store a stringified value by key
 */

async function storeItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error('Storage Error (storeItem):', error);
    return false;
  }
}

/**
 * Retrieve a value by key
 */
async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : false;
  } catch (error) {
    console.error('Storage Error (getItem):', error);
    return false;
  }
}

export default {
  storeItem,
  getItem,
};
