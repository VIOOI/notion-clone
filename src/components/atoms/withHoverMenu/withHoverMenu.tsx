import { BlockNotion, BlockTypes } from "@types/block.notion";
import { Component, createSignal, onCleanup, Show, splitProps } from "solid-js";

import optionIcon from "@public/icon/content/options.svg?raw";
import addIcon from "@public/icon/content/add.svg?raw";

import { menuStyle, menuWrapperStyle } from "./withHoverMenu.css";

export const withHoverMenu = 
	<T extends BlockTypes, P = { id: string }> 
	(HComponent: Component<P>): Component<P> => {

		const menuBlock = ({ id }: P) => {
			const [ hover, setHover ] = createSignal(false);
			let timeoutId: number | undefined;


			const handleMouseEnter = () => {
				if (timeoutId) {
					clearTimeout(timeoutId);
					timeoutId = undefined;
				}
				setHover(true);
			};

			const handleMouseLeave = () => {
				timeoutId = setTimeout(() => {
					setHover(false);
				}, 200); // Задержка в 500 мс (0.5 секунды)
			};

			onCleanup(() => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
			});

			return (
				<div 
					onMouseEnter={handleMouseEnter} 
					onMouseLeave={handleMouseLeave}
					class={menuWrapperStyle()}
				>
					<Show when={hover()}>
						<div class={menuStyle()}>
							<div class="add" innerHTML={addIcon}></div>
							<div class="options" innerHTML={optionIcon}></div>
						</div>
					</Show>
					<HComponent id={id} />
				</div>
			);
		};

		return menuBlock;
	};
