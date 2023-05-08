import { withHoverMenu } from "@atoms/withHoverMenu/withHoverMenu";
import { nti, ntr } from "@style/index";
import { BlockNotion } from "@types/block.notion";
import { useCustomHeaderStyle } from "@utils/useCustomStyle";
import useLoaderUno from "@utils/useScriptLoader.hook";
import { smoothFunction } from "@utils/utils.math";
import { JSX, onMount } from "solid-js";
import { Component, createEffect, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { headerStyle } from "./header.css";

type Props = {
	info: BlockNotion<"header">
}

const Header: Component<Props> = (props) => {
	const [ { 
		info: { 
			content: { level, text },
			block_id,
			style,
			overrideDefaultStyles,
		},
	} ] = splitProps(props, [ "info" ]);
	const classes = useCustomHeaderStyle({
		stitches: headerStyle,
		css: {
			$$margin: nti(smoothFunction(level) * 1.5),
			$$size: nti(smoothFunction(level) * 1.5),
		},
		style, overrideDefaultStyles,
	});

	onMount(() => {
		useLoaderUno(style);
	});



	return (
		<Dynamic 
			component={`h${level}`} 
			class={classes()} 
			data-id={block_id}
		>
			{ text }
		</Dynamic>
	);
};

export const MenuHeader = withHoverMenu(Header);
