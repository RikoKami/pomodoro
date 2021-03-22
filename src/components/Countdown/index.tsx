import { useContext } from "react";
import { CountdownContext } from "../../hooks/CountdownContext";
import s from "./countdown.module.scss";

export const Countdown = () => {
	const {
		minutes,
		seconds,
		hasFinished,
		startCountdown,
		resetCountdown,
		isActive,
	} = useContext(CountdownContext);
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondsLeft, secondsRight] = String(seconds)
		.padStart(2, "0")
		.split("");

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
				onClick={isActive ? resetCountdown : startCountdown}
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
