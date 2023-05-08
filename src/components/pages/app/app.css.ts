import { css } from "../../../style";

export const appStyle = css({
	width: "$wscreen",
	minHeight: "$hscreen",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: 0,
	margin: 0,
	color: "White",
	background: "$background",
});

export const appWrapperStyle = css({
	$$width: "90vw",
	"@sm": { $$width: "80vw" },
	"@md": { $$width: "75vw" },
	"@lg": { $$width: "60vw" },
	"@xl": { $$width: "50vw" },

	width: "$$width",
	minHeight: "100vh",
});
