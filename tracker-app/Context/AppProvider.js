import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const [diet, setDiet] = useState([]);

  return (
    <AppContext.Provider value={{ activities, setActivities, diet, setDiet }}>
      {children}
    </AppContext.Provider>
  );
};
