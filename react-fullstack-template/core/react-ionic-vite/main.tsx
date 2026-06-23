import "@apps/react-ionic-vite-src/global.css";

import { App } from "@apps/react-ionic-vite-src/app";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

defineCustomElements(window);

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
