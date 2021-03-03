import s from "./countdown.module.scss"

export const Countdown = () => {
  return (
    <div className={s.countdown}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}