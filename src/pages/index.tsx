import React from "react";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import s from "../styles/pages/home.module.scss";

export default function Home() {
	return (
		<div className="container">
			<ExperienceBar />
			<section className={s.column}>
				<div>
					<Profile />
				</div>
			</section>
		</div>
	);
}
