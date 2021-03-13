import { useContext, useState } from "react";
import { BodyIcon } from "../../assets/bodyIcon";
import { LevelUp } from "../../assets/levelup";
import { ChallengesContext } from "../../hooks/ChallengesContext";
import s from "./challengeBox.module.scss";

export const ChallengeBox = () => {
  const contextData = useContext(ChallengesContext);

  console.log(contextData)
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);
  
  return (
    <div className={s.challengeBox}>
      {hasActiveChallenge ? (
        <div className={s.active}>
          <header>Ganhe 400 xp</header>
          <main>
            <BodyIcon />
            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button" className={s.failButton}>Falhei</button>
            <button type="button" className={s.succeededButton}>Completei</button>
          </footer>
        </div>
      ):(
        <>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <div>
            <div className={s.icon}>
              <LevelUp fill="#FFFFFF" />
              <span></span>
              <span></span>
            </div>
            <p>Avance de level completando desafios.</p>
          </div>
        </>
      )}
    </div>
  )
}