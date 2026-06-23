import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.example.app",
	appName: "@core/react-ionic-vite",
	webDir: "dist",
	android: {
		path: "./android",
	},
};

export default config;
