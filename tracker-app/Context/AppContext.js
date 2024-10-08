import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    { id: '1', name: 'Running', date: '2024-01-01', duration: '30 min' },
    { id: '2', name: 'Cycling', date: '2024-01-01', duration: '45 min' },
  ]);

  const [diet, setDiet] = useState([
    { id: '1', name: 'Salad', date: '2024-01-01', calories: 200 },
    { id: '2', name: 'Chicken Breast', date: '2024-01-01', calories: 165 },
  ]);

  return (
    <AppContext.Provider value={{ activities, setActivities, diet, setDiet }}>
      {children}
    </AppContext.Provider>
  );
};