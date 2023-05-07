import { Tags } from "@atoms/tags/tags";
import { $pageData, newTitle } from "@pages/app/app.store";
import debounce from "@utils/debounce";
import { useUnit } from "effector-solid";
import { createEffect, createSignal, Show, VoidComponent } from "solid-js";

import { authorStyle, headerCoverStyle, headerPageStyle, titleWrapper } from "./headerPage.css";

export const HeaderPage: VoidComponent = () => {
	const page = useUnit($pageData);

	const isCoverEmpty = () => page().cover == "";
	const getCover = () => isCoverEmpty() ? "" : `url(${page().cover})`;

	const inputTitle = debounce( 
		(event: InputEventSolid) => {
			newTitle(event.target.innerHTML);
		}, 2000,
	);
	const getCSSAuthor = () => (
		isCoverEmpty() 
			? { right: "1rem", top: "1rem" }
			: { left: "1rem", top: "1rem" }
	);

	return (
		<div class={headerPageStyle({ css: {
			$$height: isCoverEmpty() ? "15vh" : "30vh",
		} })}>

			<Show when={!isCoverEmpty()}>
				<div 
					class={headerCoverStyle({ css: {
						$$image: getCover(),
					} })}
				></div>
			</Show>

			<h3 class={authorStyle({ css: {
				...getCSSAuthor(),
			} })}>{page().author.name}</h3>

			<div class={titleWrapper()}>
				<Tags tags={page().tags} />
				<h1 class="title" contentEditable={true} oninput={inputTitle} >
					{page().title}
				</h1>
			</div>
		</div>
	);
};
