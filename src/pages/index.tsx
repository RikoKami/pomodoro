import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
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
					<CompletedChallenges />
				</div>
			</section>
		</div>
	);
}
