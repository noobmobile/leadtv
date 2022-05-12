import React, { useState } from "react";
import FontContext from "./FontContext";
export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(0);

  const calc = (size, modifier = 3) => {
    return `calc(${size} + ${fontSize * modifier}px)`;
  };
  return (
    <FontContext.Provider value={[fontSize, setFontSize, calc]}>
      {children}
    </FontContext.Provider>
  );
};
