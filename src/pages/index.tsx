import Head from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import s from "../styles/pages/home.module.scss";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Início | Pomo</title>
			</Head>
			<ExperienceBar />
			<section className={s.column}>
				<div>
					<Profile />
					<CompletedChallenges />
					<Countdown />
				</div>
			</section>
		</div>
	);
}
