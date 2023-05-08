import { withHoverMenu } from "@atoms/withHoverMenu/withHoverMenu";
import { updateParagraph } from "@pages/app/updateContent.store";
import { BlockNotion } from "@types/block.notion";
import debounce from "@utils/debounce";
import { useCustomHeaderStyle } from "@utils/useCustomStyle";
import useLoaderUno from "@utils/useScriptLoader.hook";
import { Component, onMount, splitProps } from "solid-js";

import { paragraphStyle } from "./paragraph.css";

type Props = {
	info: BlockNotion<"paragraph">
}

const Paragraph: Component<Props> = (props) => {
	const [ { 
		info: { 
			content,
			block_id,
			style,
			overrideDefaultStyles,
		},
	} ] = splitProps(props, [ "info" ]);
	const classes = useCustomHeaderStyle({
		stitches: paragraphStyle,
		css: {},
		style, overrideDefaultStyles,
	});

	onMount(() => {
		useLoaderUno(style);
	});


	const handleInput = debounce(
		(event: InputEventSolid) => {
			updateParagraph({
				id: block_id,
				text: event.target.textContent,
			});
		}, 2000,
	);

	return (
		<p 
			class={classes()} 
			data-id={block_id}
			contenteditable={true}
			oninput={handleInput}
		>
			{ content }
		</p>
	);
};

export const MenuParagraph = withHoverMenu(Paragraph);
