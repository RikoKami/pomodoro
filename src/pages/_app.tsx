import "../styles/global.scss";
import { ChallengesContext } from '../hooks/ChallengesContext';

function MyApp({ Component, pageProps }) {
	return (
		<ChallengesContext.Provider value={'todo'}>
			<Component {...pageProps} />
		</ChallengesContext.Provider>
	);
}

export default MyApp;
