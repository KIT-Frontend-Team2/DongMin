import { createContext, useContext, useState, useReducer } from "react";

const initialState = [{ id: 1, name: "홍길동", nickname: "히히" }];

const UserList = createContext();

export const useUserList = () => useContext(UserList);

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      action.payload.preventDefault();
      action.payload.stopPropagation();
      return [
        ...state,
        {
          id: Math.random() * 1000000,
          name: action.payload.target.name.value,
          nickname: action.payload.target.nickname.value,
        },
      ];
    case "STATUS":
      return [...state].map((data) => ({ ...data, isEdit: true }));
    case "RESET":
      return initialState;
    case "SUBMIT":
      return state.filter((v) => v.isEdit === true);
    default:
      return state;
  }
};

const UseUserListProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserList.Provider value={[user, dispatch]}>{children}</UserList.Provider>
  );
};

export default UseUserListProvider;
