import { Module } from '@nestjs/common';
import { FooterModule } from './footer/footer.module';

@Module({
  imports: [FooterModule],
})
export class ObeliscoModule {}
