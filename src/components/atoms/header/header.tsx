import { withDragAndDrop } from "@atoms/withDragble/withDragble";
import { withHoverMenu } from "@atoms/withHoverMenu/withHoverMenu";
import { $pageData } from "@pages/app/app.store";
import { nti, ntr } from "@style/index";
import { BlockNotion } from "@types/block.notion";
import { useCustomHeaderStyle } from "@utils/useCustomStyle";
import useLoaderUno from "@utils/useScriptLoader.hook";
import { smoothFunction } from "@utils/utils.math";
import { useStoreMap } from "effector-solid";
import { Accessor, JSX, onMount } from "solid-js";
import { Component, createEffect, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { headerStyle } from "./header.css";

type Props = {
	id: string,
}

const Header: Component<Props> = ({ id }) => {
	const headerStore = useStoreMap( 
		$pageData,
		store => store.blocks.filter(item => item.block_id == id)[0],
	) as Accessor<BlockNotion<"header">>;

	const classes = useCustomHeaderStyle({
		stitches: headerStyle,
		css: {
			$$margin: nti(smoothFunction(headerStore().content.level) * 1.5),
			$$size: nti(smoothFunction(headerStore().content.level) * 1.5),
		},
		style: headerStore().style,
		overrideDefaultStyles: headerStore().overrideDefaultStyles,
	});

	onMount(() => { useLoaderUno(headerStore().style); });

	createEffect(() => {
		const tmp = document.querySelector(`[data-id="${headerStore().block_id}"]`) as HTMLHeadingElement;
		// console.log(tmp);
		tmp.dataset.order = headerStore().order.toString();
	});

	return (
		<Dynamic 
			component={`h${headerStore().content.level}`} 
			class={classes()} 
			data-id={headerStore().block_id}
		>
			{ headerStore().content.text }
		</Dynamic>
	);
};

export const MenuHeader = withDragAndDrop(withHoverMenu(Header));
