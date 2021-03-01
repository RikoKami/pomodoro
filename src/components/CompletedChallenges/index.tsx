import React from 'react';
import s from "./completedChallenges.module.scss";

export const CompletedChallenges = () => {
  return (
    <div className={s.completedChallenges}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}