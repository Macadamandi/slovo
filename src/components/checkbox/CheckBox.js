import React, { createContext, useState } from 'react';

export const CheckboxContext = createContext();

const CheckBox = ({children}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxContext.Provider value={{isChecked, setIsChecked}}>
      {children}
    </CheckboxContext.Provider>
  );
}

export default CheckBox;