import "../styles/global.scss";
import { ChallengesProvider } from '../hooks/ChallengesContext';
import React from "react";

function MyApp({ Component, pageProps }) {
	return (
		<ChallengesProvider>
			<Component {...pageProps} />
		</ChallengesProvider>
	);
}

export default MyApp;
