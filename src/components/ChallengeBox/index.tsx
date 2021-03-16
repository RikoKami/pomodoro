import { useContext } from "react";
import { BodyIcon } from "../../assets/bodyIcon";
import { EyeIcon } from "../../assets/eyeIcon";
import { LevelUp } from "../../assets/levelup";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./challengeBox.module.scss";

export const ChallengeBox = () => {
	const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

	return (
		<div className={s.challengeBox}>
			{activeChallenge ? (
				<div className={s.active}>
					<header>Ganhe {activeChallenge.amount} xp</header>
					<main>
						{activeChallenge.type === "body" ? <BodyIcon /> : <EyeIcon />}
						<strong>Novo Desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>
					<footer>
						<button
							type="button"
							className={s.failButton}
							onClick={resetChallenge}
						>
							Falhei
						</button>
						<button type="button" className={s.succeededButton}>
							Completei
						</button>
					</footer>
				</div>
			) : (
				<>
					<strong>
						Inicie um ciclo para receber desafios a serem completados
					</strong>
					<div>
						<div className={s.icon}>
							<LevelUp fill="#FFFFFF" />
							<span></span>
							<span></span>
						</div>
						<p>Avance de level completando desafios.</p>
					</div>
				</>
			)}
		</div>
	);
};
