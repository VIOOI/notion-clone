import { createStitches, createTheme } from "@stitches/core";

export const ntr = (value: number): string => {
	const remValue: number = value * 0.25;
	return `${remValue}rem`;
};
export const nti = (value: number): string => {
	return `calc(var(--index) * ${value})`;
};
export const snti = (value: number): string => {
	return `calc(calc(var(--index) * ${value}) * var(--scale))`;
};
export const sntr = (value: number): string => {
	return `calc(${value}rem * var(--scale))`;
};

export const { globalCss, css } = createStitches({
	theme: {
		sizes: {
			wscreen: "100vw",
			hscreen: "100vh",
		},
	},
	utils: {
		paddingX: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		marginX: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),
		flexCenter: () => ({
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}),
	},
	media: {
		sm: "(min-width: 640px)",
		md: "(min-width: 768px)",
		lg: "(min-width: 1024px)",
		xl: "(min-width: 1280px)",
		"2xl": "(min-width: 1536px)",

	},
});

export const light = createTheme({
	colors: {
		background: "#ffffff",
		foreground: "#f5f5f5",
		text: "#0f0f0f",
	},
});

export const dark = createTheme({
	colors: {
		background: "#0f0f0f",
		foreground: "rgba(25,25,25,1)",
		text: "#ffffff",
	},
});

export const blue = createTheme({
	colors: {
		background: "#075985",
		foreground: "#0ea5e9",
		text: "#D8D8D8",
	},
});
