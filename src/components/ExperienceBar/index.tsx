import s from "./experienceBar.module.scss";

export const ExperienceBar = () => {
	return (
		<div className={s.experienceBar}>
			<span>0 xp</span>
			<div className={s.current}>
				<div style={{ width: "50%" }} />
				<span className={s.currentExp} style={{ left: "50%" }}>
					300px
				</span>
			</div>
			<span>600px</span>
		</div>
	);
};
