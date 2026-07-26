import { homedir } from "node:os";
import { join, resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		root: resolve(__dirname, "../../apps/react-vite-src"),
		environment: "jsdom",
		alias: {
			"@apps/react-vite-src": resolve(__dirname, "../../apps/react-vite-src"),
		},
		browser: {
			enabled: true,
			provider: playwright({
				launchOptions: {
					executablePath: join(
						homedir(),
						".cache/ms-playwright/chromium-1234/chrome-linux64/chrome",
					),
				},
			}),
			instances: [{ browser: "chromium" }],
		},
	},
});
