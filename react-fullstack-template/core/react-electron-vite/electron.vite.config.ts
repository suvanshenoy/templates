import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

export default defineConfig({
	main: {
		build: {
			rollupOptions: {
				input: {
					index: resolve(
						__dirname,
						"../../apps/react-electron-vite-src/main/index.ts",
					),
				},
			},
		},
	},
	preload: {
		build: {
			rollupOptions: {
				input: {
					index: resolve(
						__dirname,
						"../../apps/react-electron-vite-src/preload/index.ts",
					),
				},
			},
		},
	},
	renderer: {
		plugins: [
			react(),

			tailwindcss(),
		],
		root: ".",
		build: {
			rollupOptions: {
				input: {
					index: resolve(__dirname, "index.html"),
				},
			},
		},
	},
});
