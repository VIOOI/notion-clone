import { css, nti, ntr } from "@style/index";

export const headerStyle = css({
	$$margin: ntr(3),
	$$size: nti(5),

	marginTop: "$$margin",
	marginBottom: "calc($$margin / 2)",
	fontSize: "$$size",
	fontWeight: 900,
	padding: 0,
});
