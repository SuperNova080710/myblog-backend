import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'upseul.mooo.com',
    port: 5432,
    username: 'Odyz',
    password: 'dheltpdntm',
    database: 'myBlog',
    autoLoadEntities: true,
    synchronize: true,
  }), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
