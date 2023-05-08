import { css, ntr } from "@style/index";

 
export const menuWrapperStyle = css({
	position: "relative",
});

export const menuStyle = css({
	position: "absolute",
	top: ntr(3),
	left: ntr(-20),
	paddingX: ntr(4),
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	columnGap: ntr(3),
	"& .options": {
		width: ntr(5),
		height: ntr(7),
		borderRadius: "6px",
	},
	"& .add": {
		width: ntr(5),
		height: ntr(7),
		borderRadius: "6px",
	},
});
