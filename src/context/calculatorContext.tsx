import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface IValueProps {
  prevValue: string | undefined;
  currentValue: string;
  operator: string | undefined;
  resetCurrVal: boolean;
}

export interface IContextProps {
  value: IValueProps;
  setValue: Dispatch<SetStateAction<IValueProps>>;
}

export const defaultState = {
  value: {
    prevValue: undefined,
    currentValue: "0",
    operator: undefined,
    resetCurrVal: false
  },
  setValue: (value: IValueProps) => {}
} as IContextProps;

export const CalculatorContext = createContext(defaultState);

interface ICaculatorProviderProps {
  children?: ReactNode;
}

const CalculatorProvider = ({ children }: ICaculatorProviderProps) => {
  const [value, setValue] = useState<IValueProps>(defaultState.value);

  return (
    <CalculatorContext.Provider value={{value, setValue}}>
      { children }
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;