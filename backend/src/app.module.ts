import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AtmModule } from './atm/atm.module'
import { PrismaService } from './prisma.service'
import { ServicesModule } from './services/services.module'
import { BankOfficeModule } from './bank-office/bank-office.module';
import { TaskModule } from './task/task.module';
import { CurrentTaskModule } from './current-task/current-task.module';

@Module({
	imports: [ConfigModule.forRoot(), AtmModule, ServicesModule, BankOfficeModule, TaskModule, CurrentTaskModule],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
