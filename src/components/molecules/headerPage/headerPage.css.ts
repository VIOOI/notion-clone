import { css, nti, ntr } from "../../../style";


export const headerPageStyle = css({
	$$height: "30vh",

	position: "relative",
	height: "$$height",
	color: "$text",
});

export const headerCoverStyle = css({
	$$left: "-5vw",
	$$image: "",

	"@sm": { $$left: "-10vw" },
	"@md": { $$left: "-12.5vw" },
	"@lg": { $$left: "-20vw" },
	"@xl": { $$left: "-25vw" },

	position: "absolute",
	width: "$wscreen",
	height: "100%",
	backgroundImage: "$$image",
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	top: 0,
	left: "$$left",
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
	left: 0,
	"& .title": {
		fontSize: nti(10),
		lineHeight: nti(10),
		outline: "none",
		color: "$text",
	},
});
