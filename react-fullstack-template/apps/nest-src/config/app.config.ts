import { registerAs } from "@nestjs/config";

type AppConfig = {
	port: number;
	frontend_url: string;
	env: "development" | "production";
	database_url: string;
};

export default registerAs(
	"app",
	(): AppConfig => ({
		port: Number(process.env.PORT) ?? 3000,
		frontend_url: process.env.FRONTEND_URL ?? "http://localhost:5173",
		env: (process.env.NODE_ENV ?? "development") as AppConfig["env"],
		database_url: process.env.DATABASE_URL as string,
	}),
);
