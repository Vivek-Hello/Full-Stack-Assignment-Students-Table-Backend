import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
let isAppInitialized = false;

const bootstrap = async () => {
  if (isAppInitialized) return;

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  isAppInitialized = true;
};

export default async (req: any, res: any) => {
  await bootstrap();
  server(req, res);
};
