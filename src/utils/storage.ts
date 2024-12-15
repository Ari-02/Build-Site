const STORAGE_KEY = 'productivity-master-data';

interface StorageData {
  tasks: any[];
  habits: any[];
  settings: any;
}

export const loadFromStorage = (): StorageData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { tasks: [], habits: [], settings: {} };
  } catch (error) {
    console.error('Error loading data from storage:', error);
    return { tasks: [], habits: [], settings: {} };
  }
};

export const saveToStorage = (data: StorageData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to storage:', error);
  }
};