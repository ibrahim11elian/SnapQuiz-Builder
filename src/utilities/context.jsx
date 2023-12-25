/* eslint-disable react/prop-types */
// Disabling eslint rule for prop-types since they are intentionally not used in this module.

import { createContext, useContext, useState } from "react";
import lang from "../data/language";

// Create a new context
const appContext = createContext();

// Define the context provider component
export const AppContextProvider = ({ children }) => {
  // State variables for programming language, code snippet, result image, and choice list
  const [pl, setPL] = useState(lang[13]); // Defaulting to a specific language from the language data

  const [codeSnippet, setCodeSnippet] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [choiceList, setChoiceList] = useState([]);

  // Provide the values to the context provider
  return (
    <appContext.Provider
      value={{
        codeSnippet,
        setCodeSnippet,
        resultImage,
        setResultImage,
        pl,
        setPL,
        choiceList,
        setChoiceList,
      }}
    >
      {/* Render the children components with the provided context values */}
      {children}
    </appContext.Provider>
  );
};

// Custom hook to access the context values
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  // Return the context values using the useContext hook
  return useContext(appContext);
};
