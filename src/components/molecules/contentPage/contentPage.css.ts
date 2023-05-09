import { css, ntr } from "@style/index";

export const contentStyle = css({
	paddingTop: ntr(10),
	"&>div:first-child [data-id]": {
		marginTop: 0,
	},
});
