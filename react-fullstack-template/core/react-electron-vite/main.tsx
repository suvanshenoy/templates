import "@apps/react-electron-vite-src/global.css";

import { App } from "@apps/react-electron-vite-src/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
