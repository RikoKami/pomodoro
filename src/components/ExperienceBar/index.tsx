import React from 'react'
import s from "./experienceBar.module.scss";

export const ExperienceBar = () => {
    return (
        <div className={s.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%'}} />
            </div>
            <div className={s.currentExp}>
                300px
            </div>
            <span>600px</span>
        </div>
    )
}