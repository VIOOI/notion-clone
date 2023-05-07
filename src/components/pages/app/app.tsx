import { createRoute } from "atomic-router";
import { Component } from "solid-js";

import { HeaderPage } from "@molecules/headerPage/headerPage";

import { dark } from "../../../style/index";

import { appStyle, appWrapperStyle } from "./app.css";

export const appRoute = createRoute();

export const App: Component = () => {
	return (
		<div class={`${appStyle()} ${dark}`}>
			<div class={appWrapperStyle()}>
				<HeaderPage />
			</div>
		</div>
	);
};
