import { createContext, ReactNode, useState } from 'react';

interface ChallengesProviderProps {
  children: ReactNode;
}
interface ChallengesContextDate {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextDate);

export const ChallengesProvider = ({children}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    console.log('New Challenge')
  }

  return (
    <ChallengesContext.Provider value={{ level, currentExperience, challengesCompleted, levelUp, startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}