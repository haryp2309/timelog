import { AppModule } from '@/modules/app/app.module';
import { customAuthHeaders } from '@/modules/auth/constants';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Timelog')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `Access Token`,
        name: customAuthHeaders.accessToken,
        type: 'apiKey',
        in: 'header',
      },
      'access-token',
    )
    .addBearerAuth(
      {
        description: `User Email`,
        name: customAuthHeaders.accessUser,
        type: 'apiKey',
        in: 'header',
      },
      'access-user',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  await app.listen(3000);
}
bootstrap();
