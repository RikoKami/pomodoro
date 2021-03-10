import { LevelUp } from "../../assets/levelup";
import s from "./challengeBox.module.scss";

export const ChallengeBox = () => {
  return (
    <div className={s.challengeBox}>
      <strong>Inicie um ciclo para receber desafios a serem completados</strong>
      <div>
        <div className={s.icon}>
          <LevelUp fill="#FFFFFF" />
          <span></span>
          <span></span>
        </div>
        <p>Avance de level completando desafios.</p>
      </div>
    </div>
  )
}