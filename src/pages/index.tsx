import Head from "next/head";
import React from "react";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../hooks/CountdownContext";
import s from "../styles/pages/home.module.scss";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../hooks/ChallengesContext";

export interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home({
	level,
	challengesCompleted,
	currentExperience,
}: HomeProps) {
	return (
		<ChallengesProvider
			level={level}
			currentExperience={currentExperience}
			challengesCompleted={challengesCompleted}
		>
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
		</ChallengesProvider>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
		},
	};
};
