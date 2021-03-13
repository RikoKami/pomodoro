import { createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({children}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);

  const levelUp = () => setLevel(level + 1)

  return (
    <ChallengesContext.Provider value={{ level, levelUp}}>
      {children}
    </ChallengesContext.Provider>
  )
}