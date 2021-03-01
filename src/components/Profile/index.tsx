import React from "react";
import { LevelUp } from "../../assets/levelup";
import s from "./profile.module.scss";

export const Profile = () => {
	return (
		<figure className={s.profile}>
			<picture>
				<img src="https://github.com/rikokami.png" alt="" />
			</picture>
			<figcaption>
				<strong>Larissa Dantas</strong>

				<div className={s.level}>
					<LevelUp className={s.iconLevelUp} />
					<span> Level 1</span>
				</div>
			</figcaption>
		</figure>
	);
};
