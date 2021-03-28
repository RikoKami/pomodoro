import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../../challenges.json";
import Cookies from "js-cookie";
import { HomeProps } from "../pages";
import { LevelUpModal } from "../components/LevelUp";

interface ChallengesProviderProps extends HomeProps {
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
	completeChallenge: () => void;
	closeModalLevelUp: () => void;
	activeChallenge: Challenge;
}

export const ChallengesContext = createContext({} as ChallengesContextDate);

export const ChallengesProvider = ({
	children,
	...rest
}: ChallengesProviderProps) => {
	const [level, setLevel] = useState(rest.level ?? 1);
	const [currentExperience, setCurrentExperience] = useState(
		rest.currentExperience ?? 0
	);
	const [challengesCompleted, setChallengesCompleted] = useState(
		rest.challengesCompleted ?? 0
	);

	const [activeChallenge, setActiveChallenge] = useState(null);
	const [isVisibleLevelUpModal, setIsVisibleLevelUpModal] = useState(false);

	// potencia de 2
	// 4 de fator de exp
	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	useEffect(() => {
		Notification.requestPermission();
	}, []);

	useEffect(() => {
		Cookies.set("level", String(level));
		Cookies.set("currentExperience", String(currentExperience));
		Cookies.set("challengesCompleted", String(challengesCompleted));
	}, [currentExperience, level, challengesCompleted]);

	const levelUp = () => {
		setLevel(level + 1);
		setIsVisibleLevelUpModal(true);
	};

	const closeModalLevelUp = () => {
		setIsVisibleLevelUpModal(false);
	};

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];
		setActiveChallenge(challenge);

		if (Notification.permission === "granted") {
			new Audio("/notification.mp3").play();

			new Notification("Novo desafio 😀", {
				body: `Valendo ${challenge.amount}xp`,
				icon: "favicon.png",
				vibrate: [200, 100, 200], // only chrome android, opera android && samsung internet
			});
		}
	};

	const resetChallenge = () => {
		setActiveChallenge(null);
	};

	const completeChallenge = () => {
		if (!activeChallenge) {
			return;
		}

		const { amount } = activeChallenge;
		let finalExperience = currentExperience + amount;

		if (finalExperience >= experienceToNextLevel) {
			finalExperience = finalExperience - experienceToNextLevel;
			levelUp();
		}

		setCurrentExperience(finalExperience);
		setActiveChallenge(null);
		setChallengesCompleted(challengesCompleted + 1);
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
				completeChallenge,
				activeChallenge,
				closeModalLevelUp,
			}}
		>
			{children}

			{isVisibleLevelUpModal && <LevelUpModal />}
		</ChallengesContext.Provider>
	);
};
