import type { Configuration } from "electron-builder";

export const config: Configuration = {
	appId: "com.electron.app",
	productName: "react-electron-vite",
	directories: {
		buildResources: "build",
	},
	files: [
		"!src/*",
		"!electron.vite.config.{js,ts,mjs,cjs}",
		"!{dev-app-update.yml,CHANGELOG.md,README.md}",
		"!{.env,.env.*,bun.lock}",
		"!{tsconfig.json,tsconfig.node.json,tsconfig.web.json}",
	],
	win: {
		executableName: "react-electron-vite",
	},
	nsis: {},
	mac: {
		entitlementsInherit: "build/entitlements.mac.plist",
		extendInfo: {
			NSCameraUsageDescription:
				"Application requests access to the device's camera.",
			NSMicrophoneUsageDescription:
				"Application requests access to the device's microphone.",
			NSDocumentsFolderUsageDescription:
				"Application requests access to the user's Documents folder.",
			NSDownloadsFolderUsageDescription:
				"Application requests access to the user's Downloads folder.",
		},
		notarize: false,
	},
	dmg: {},
	linux: {
		target: [
			{
				target: "AppImage",
			},
			{
				target: "snap",
			},
			{
				target: "deb",
			},
		],
		maintainer: "electronjs.org",
		category: "Utility",
	},
	appImage: {},
	npmRebuild: false,
	publish: {
		provider: "generic",
		url: "https://example.com/auto-updates",
	},
};
