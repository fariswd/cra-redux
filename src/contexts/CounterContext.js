import { createContext, useState } from "react";

const initialValue = {
  count: 88,
};

export const CounterContext = createContext(initialValue);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(initialValue.count);

  const add = () => {
    setCount((state) => state + 1);
  };
  const dec = () => {
    setCount((state) => state - 1);
  };

  return (
    <CounterContext.Provider
      value={{
        add,
        dec,
        count,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
