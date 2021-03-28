import React, { useContext } from "react";
import { Close } from "../../assets/close";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./levelUp.module.scss";

export const LevelUpModal = () => {
	const { level, closeModalLevelUp } = useContext(ChallengesContext);

	return (
		<div className={s.overlay}>
			<div className={s.modal}>
				<header>
					<span>{level}</span>
				</header>

				<strong>Parabéns!</strong>
				<p>Você alcançou um novo level.</p>

				<button type="button" onClick={closeModalLevelUp}>
					<Close />
				</button>
			</div>
		</div>
	);
};
