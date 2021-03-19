import { createContext, ReactNode } from "react";

interface CountdownContextData {}

interface CountdownProviderProps {
	children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
	return (
		<CountdownContext.Provider value={{}}>{children}</CountdownContext.Provider>
	);
};
