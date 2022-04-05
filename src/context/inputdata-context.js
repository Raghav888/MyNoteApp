import { createContext, useContext, useReducer } from "react";
import { inputDataReducer } from "../utils/inputDataReducer";

const InputDataContext = createContext();

const InputDataProvider = ({ children }) => {
  const [inputdatastate, inputdatadispatch] = useReducer(inputDataReducer, {
    title: null,
    data: null,
    tag: "WORK",
    priority: 1,
    cardcolor: "white-box",
    id: null,
    archive: false,
  });

  return (
    <InputDataContext.Provider value={{ inputdatastate, inputdatadispatch }}>
      {children}
    </InputDataContext.Provider>
  );
};

const useInputData = () => useContext(InputDataContext);

export { InputDataProvider, useInputData };
