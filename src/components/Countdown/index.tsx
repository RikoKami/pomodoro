import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./countdown.module.scss";

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
	const { startNewChallenge } = useContext(ChallengesContext);
	const [time, setTime] = useState(0.1 * 60);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondsLeft, secondsRight] = String(seconds)
		.padStart(2, "0")
		.split("");

	const handleCountdown = () => {
		setIsActive(!isActive);
		clearTimeout(countdownTimeout);
		setTime(0.1 * 60);
	};

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenge();
		}
	}, [isActive, time]);

	return (
		<>
			<div className={s.countdown}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondsLeft}</span>
					<span>{secondsRight}</span>
				</div>
			</div>
			<button
				type="button"
				disabled={hasFinished}
				className={`${s.countdownBtn} ${isActive ? s.active : ""}`}
				onClick={handleCountdown}
			>
				{isActive
					? "Abandonar ciclo"
					: hasFinished
					? "Ciclo encerrado"
					: "Iniciar um ciclo"}
			</button>
		</>
	);
};
