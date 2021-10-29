import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks/tasks.controller';
import { LoginController } from './login/login.controller';
import config from './config/keys';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule,
    LoginModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [AppController, TasksController, LoginController],
  providers: [AppService],
})
export class AppModule {}
