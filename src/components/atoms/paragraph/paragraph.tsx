import { withDragAndDrop } from "@atoms/withDragble/withDragble";
import { withHoverMenu } from "@atoms/withHoverMenu/withHoverMenu";
import { $pageData } from "@pages/app/app.store";
import { updateParagraph } from "@pages/app/updateContent.store";
import { BlockNotion } from "@types/block.notion";
import debounce from "@utils/debounce";
import { useCustomHeaderStyle } from "@utils/useCustomStyle";
import useLoaderUno from "@utils/useScriptLoader.hook";
import { useStoreMap } from "effector-solid";
import { Component, createEffect, createSignal, onMount, splitProps } from "solid-js";

import { paragraphStyle, toChildrenStyle } from "./paragraph.css";

type Props = {
	id: string,
}

const Paragraph: Component<Props> = ({ id }) => {
	const paragraphStore = useStoreMap( 
		$pageData,
		store => store.blocks.filter(item => item.block_id == id)[0],
	) as Accessor<BlockNotion<"paragraph">>;

	const classes = useCustomHeaderStyle({
		stitches: paragraphStyle,
		css: { },
		style: paragraphStore().style,
		overrideDefaultStyles: paragraphStore().overrideDefaultStyles,
	});

	onMount(() => { useLoaderUno(paragraphStore().style); });
	const handleInput = debounce(
		(event: InputEventSolid) => {
			updateParagraph({
				id: paragraphStore().block_id,
				text: event.target.textContent,
			});
		}, 2000,
	);

	createEffect(() => {
		const tmp = document.querySelector(`[data-id="${paragraphStore().block_id}"]`) as HTMLHeadingElement;
		// console.log(tmp);
		tmp.dataset.order = paragraphStore().order.toString();
	});

	return (
		<p 
			class={classes()} 
			data-id={paragraphStore().block_id}
			contenteditable={true}
			oninput={handleInput}
		>
			{ paragraphStore().content }
			<span class={`${toChildrenStyle()} to__children`}></span>
		</p>
	);
};

export const MenuParagraph = withDragAndDrop(withHoverMenu(Paragraph));
