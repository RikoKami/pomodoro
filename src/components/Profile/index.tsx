import { useContext } from "react";
import { LevelUp } from "../../assets/levelup";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./profile.module.scss";

export const Profile = () => {
	const { level } = useContext(ChallengesContext);

	return (
		<figure className={s.profile}>
			<picture>
				<img src="https://github.com/rikokami.png" alt="" />
			</picture>
			<figcaption>
				<strong>Larissa Dantas</strong>

				<div className={s.level}>
					<LevelUp className={s.iconLevelUp} />
					<span>Level {level}</span>
				</div>
			</figcaption>
		</figure>
	);
};
