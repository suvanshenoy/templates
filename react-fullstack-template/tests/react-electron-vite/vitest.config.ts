import { homedir } from "node:os";
import { join, resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		alias: {
			"@apps/react-electron-vite-src": resolve(
				__dirname,
				"../../apps/react-electron-vite-src",
			),
		},
		browser: {
			enabled: true,
			provider: playwright({
				launchOptions: {
					executablePath: join(
						homedir(),
						".cache/ms-playwright/chromium-1228/chrome-linux64/chrome",
					),
				},
			}),
			instances: [{ browser: "chromium" }],
		},
	},
});
