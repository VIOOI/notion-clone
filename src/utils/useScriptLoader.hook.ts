import { $isLoadedUnocss, unocssLoading } from "@pages/app/app.store";
import { useUnit } from "effector-solid";
import { createEffect, onCleanup } from "solid-js";

const createScriptElement = (src: string, name: string): HTMLScriptElement => {
	const script = document.createElement("script");
	script.src = src;
	script.dataset["name"] = name;
	return script;
};

export const useLoaderUno = (style: string): (() => boolean) => {
	const isLoaded = useUnit($isLoadedUnocss);
	const loaded = false;

	console.log(style );
	if (style == "" || style == undefined) return () => loaded;
	if (isLoaded()) return () => loaded;

	const src = "https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js";

	createEffect(() => {

		const script = createScriptElement(src, "unocss");
		document.body.appendChild(script);
		unocssLoading();

		// onCleanup(() => {
		// 	document.body.removeChild(script);
		// 	const elements = document.querySelectorAll("[data-unocss-runtime-layer]");

		// 	elements.forEach(element => {
		// 		element.parentNode.removeChild(element);
		// 	});
		// });
	});

	return () => loaded;
};

export default useLoaderUno;
