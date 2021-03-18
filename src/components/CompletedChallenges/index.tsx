import { useContext } from "react";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./completedChallenges.module.scss";

export const CompletedChallenges = () => {
	const { challengesCompleted } = useContext(ChallengesContext);

	return (
		<div className={s.completedChallenges}>
			<span>Desafios completos</span>
			<span>{challengesCompleted}</span>
		</div>
	);
};
