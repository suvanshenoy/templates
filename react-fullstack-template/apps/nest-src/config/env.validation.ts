import * as z from "zod";

export const envValidationSchema = z.object({
	PORT: z.number().default(3000),
	FRONTEND_URL: z.string().default("http://localhost:5173"),
	NODE_ENV: z.enum(["development", "production"]).default("development"),
	DATABASE_URL: z.string(),
});
