import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface ChallengesProviderProps {
	children: ReactNode;
}

interface Challenge {
	type: "body" | "eye";
	description: string;
	amount: number;
}
interface ChallengesContextDate {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	experienceToNextLevel: number;
	levelUp: () => void;
	startNewChallenge: () => void;
	resetChallenge: () => void;
	activeChallenge: Challenge;
}

export const ChallengesContext = createContext({} as ChallengesContextDate);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
	const [level, setLevel] = useState(1);
	const [currentExperience, setCurrentExperience] = useState(0);
	const [challengesCompleted, setChallengesCompleted] = useState(0);

	const [activeChallenge, setActiveChallenge] = useState(null);

	// potencia de 2
	// 4 de fator de exp
	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	const levelUp = () => setLevel(level + 1);

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];
		setActiveChallenge(challenge);
	};

	const resetChallenge = () => {
		setActiveChallenge(null);
	};

	return (
		<ChallengesContext.Provider
			value={{
				level,
				currentExperience,
				challengesCompleted,
				experienceToNextLevel,
				levelUp,
				startNewChallenge,
				resetChallenge,
				activeChallenge,
			}}
		>
			{children}
		</ChallengesContext.Provider>
	);
};
