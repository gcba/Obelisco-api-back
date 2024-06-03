import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService],
})
export class HeaderModule {}
