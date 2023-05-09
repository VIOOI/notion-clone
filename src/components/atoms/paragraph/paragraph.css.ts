import { css, nti, ntr } from "@style/index";

export const paragraphStyle = css({
	marginTop: ntr(3),
	// marginBottom: ntr(3),
	fontSize: ntr(5),
	fontWeight: 300,
	outline: "none",
});
export const toChildrenStyle = css({
	width: "100%",
	height: ntr(4),
	display: "block",
	".drop-children &": {
		background: "rgba(100, 125, 216, .5)",
	},

});
