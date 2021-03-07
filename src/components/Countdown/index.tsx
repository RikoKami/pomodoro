import { useEffect, useState } from "react";
import s from "./countdown.module.scss"

export const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("")

  const startCountDown = () => {
    setActive(true)
  }

  useEffect(() => {
    if(active && time > 0){
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  },[active, time])


  return (
    <>
      <div className={s.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      <button type="button" className={s.countdownBtn} onClick={startCountDown}>Iniciar um ciclo</button>  
    </>
  )
}