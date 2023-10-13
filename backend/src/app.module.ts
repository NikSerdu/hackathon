import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { ProductsModule } from './products/products.module';
import { DishesModule } from './dishes/dishes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { CategoryModule } from './category/category.module';

@Module({
	imports: [ConfigModule.forRoot(), ProductsModule, DishesModule, IngredientsModule, CategoryModule],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
