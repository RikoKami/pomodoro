import { useContext } from "react";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./experienceBar.module.scss";

export const ExperienceBar = () => {
	const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

	return (
		<div className={s.experienceBar}>
			<span>0 xp</span>
			<div className={s.current}>
				<div style={{ width: `${percentToNextLevel}%` }} />
				<span className={s.currentExp} style={{ left: `${percentToNextLevel}%` }}>
					{currentExperience} xp
				</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</div>
	);
};
