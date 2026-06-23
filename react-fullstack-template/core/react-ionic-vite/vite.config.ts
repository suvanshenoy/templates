import { resolve } from "node:path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		root: "./",
		plugins: [
			react(),
			babel({ presets: [reactCompilerPreset()] }),
			tailwindcss(),
		],
		resolve: {
			alias: {
				"@apps/react-ionic-vite-src": resolve(
					__dirname,
					"../../apps/react-ionic-vite-src",
				),
			},
		},
		define: {
			__BACKEND_URL__: JSON.stringify(env.BACKEND_URL),
		},
		server: {
			port: 5173,
		},
	};
});
