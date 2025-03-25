import { Module } from '@nestjs/common';
import { ObeliscoModule } from './app/obelisco/obelisco.module';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './app/obelisco/footer/footer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ObeliscoModule,
    FooterModule,
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
