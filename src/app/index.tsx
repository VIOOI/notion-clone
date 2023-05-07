import "uno.css";
import { render } from "solid-js/web";
import { createRoutesView, RouterProvider } from "atomic-router-solid";

import { App, appRoute } from "@pages/app/app";

import { NotFound } from "@pages/notFound";

import { globalCss } from "../style/index";
import "../style/utils.scss";

import { router } from "./routing";

const RouterView = createRoutesView({
	routes: [
		{ route: appRoute, view: App },
	],
	otherwise: NotFound,
});


globalCss();

render(() => (
	<RouterProvider router={router} >
		<RouterView />
	</RouterProvider>
), document.getElementById("root") as HTMLElement);

