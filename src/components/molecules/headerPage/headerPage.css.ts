import { css, nti, ntr } from "../../../style";


export const headerPageStyle = css({
	$$height: "30vh",

	position: "relative",
	height: "$$height",
});

export const headerCoverStyle = css({
	$$image: "",
	position: "absolute",
	width: "$wscreen",
	height: "100%",
	backgroundImage: "$$image",
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	top: 0,
	left: "-20vw",
});

export const authorStyle = css({

	zIndex: 10,
	position: "absolute",
	fontWeight: 400,
	background: "#0f0f0f",
	paddingX: ntr(4),
	paddingY: ntr(1),
	borderRadius: ntr(2),
});

export const titleWrapper = css({
	position: "absolute",
	margin: 0,
	bottom: ntr(5),
	left: nti(2),
	"& .title": {
		fontSize: nti(10),
		lineHeight: nti(10),
		outline: "none",
	},
});
