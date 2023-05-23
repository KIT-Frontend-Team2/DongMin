import { createContext, useContext, useState } from "react";

const UseModal = createContext();

export const useUseModal = () => useContext(UseModal);

const UseModalProvider = ({ children }) => {
  const [isModalOpenA, setIsModalOpenA] = useState(false);
  const [isModalOpenB, setIsModalOpenB] = useState(false);

  return (
    <UseModal.Provider
      value={[isModalOpenA, setIsModalOpenA, isModalOpenB, setIsModalOpenB]}
    >
      {children}
    </UseModal.Provider>
  );
};

export default UseModalProvider;
