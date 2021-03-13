import { createContext, useState } from 'react';

export const ChallengesContext = createContext({});

export const ChallengesProvider = ({children}) => {
  const [level, setLevel] = useState(1);

  const levelUp = () => setLevel(level + 1)

  return (
    <ChallengesContext.Provider value={{ level, levelUp}}>
      {children}
    </ChallengesContext.Provider>
  )
}