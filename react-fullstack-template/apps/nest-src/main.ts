import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const configService = app.get(ConfigService);

	app.setGlobalPrefix("api");
	app.enableCors({
		origin: [configService.get<string>("app.frontend_url") as string],
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
		credentials: true,
		maxAge: 86400,
	});
	await app.listen(configService.get<number>("app.port") as number);
}
bootstrap();
