/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'zxstudioDB',
      password: 'ZXStudio2023',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // BreadModule,
    // CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
