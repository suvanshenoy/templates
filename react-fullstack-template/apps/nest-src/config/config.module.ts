import { Module } from "@nestjs/common";
import { ConfigModule as NestJsConfigModule } from "@nestjs/config";
import appConfig from "./app.config";
import { envValidationSchema } from "./env.validation";

@Module({
	imports: [
		NestJsConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [".env", `.env.${process.env.NODE_ENV}`],
			load: [appConfig],
			cache: true,
			validate: (env) => envValidationSchema.parse(env),
		}),
	],
	exports: [NestJsConfigModule],
})
export class AppConfigModule {}
