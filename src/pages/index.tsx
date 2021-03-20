import Head from "next/head";
import React from "react";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../hooks/CountdownContext";
import s from "../styles/pages/home.module.scss";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Início | Pomo</title>
			</Head>
			<ExperienceBar />

			<CountdownProvider>
				<section className={s.column}>
					<div>
						<Profile />
						<CompletedChallenges />
						<Countdown />
					</div>
					<ChallengeBox />
				</section>
			</CountdownProvider>
		</div>
	);
}
