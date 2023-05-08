
import { MenuHeader } from "@atoms/header/header";
import { MenuParagraph } from "@atoms/paragraph/paragraph";
import { $pageData } from "@pages/app/app.store";
import { BlockNotion } from "@types/block.notion";
import { useStoreMap } from "effector-solid";
import { Component, For, Match, onMount, splitProps, Switch, VoidComponent } from "solid-js";


export const ContentPage: VoidComponent = () => {
	const blocks = useStoreMap( $pageData, (state) => state.blocks);
	onMount(() => {
		console.log(blocks());
	}); 
	return (
		<div>
			<For each={blocks()}>{ block => 
				<Switch fallback={<></>}>

					<Match when={block.block_type == "header"}>
						<MenuHeader info={block as BlockNotion<"header">} />
					</Match>

					<Match when={block.block_type == "paragraph"}>
						<MenuParagraph info={block as BlockNotion<"paragraph">} />
					</Match>

				</Switch>
			}</For>
		</div>
	);
};
