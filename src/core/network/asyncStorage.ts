import AsyncStorage from '@react-native-async-storage/async-storage';

export const _retrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log('no Country Found');
    return null;
  }
};

export const _storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem('country', value);
  } catch (error) {
    // Error saving data
    console.log('error setting the item', error);
  }
};

export const _retrieveDataObject = async (key: Object) => {
    try {
      const jsonValue = await AsyncStorage.getItem('key')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
      console.log('ERRRORE.', e)
    }
};

export const _storeDataObject = async (value: Object) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('key', jsonValue)
    } catch(e) {
      // save error
    }
};
