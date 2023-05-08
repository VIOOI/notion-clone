import { CSS } from "@stitches/core";
import { CssComponent } from "@stitches/core/types/styled-component";
import { createEffect, createSignal } from "solid-js";

type PropsHook = {
	stitches: CssComponent<any>,
	css: CSS,
	style: string,
	overrideDefaultStyles: boolean,
}

export function useCustomHeaderStyle({ style, overrideDefaultStyles, stitches, css }: PropsHook) {

	const [ classes, setClasses ] = createSignal("");

	createEffect(() => {
		const isCustomStyleEmpty = () => style == "";
		const isCustomOverrideStyle = () => !isCustomStyleEmpty() && overrideDefaultStyles;
		const isCustomNotOverrideStyle = () => !isCustomStyleEmpty() && !overrideDefaultStyles;

		const getStyle = () => {
			if (isCustomStyleEmpty()) return `${stitches({ css })}`;
			if (isCustomNotOverrideStyle()) return `${stitches({ css })} ${style}`;
			if (isCustomOverrideStyle()) return style; 
		};

		setClasses(getStyle());
	});

	return classes;
}
