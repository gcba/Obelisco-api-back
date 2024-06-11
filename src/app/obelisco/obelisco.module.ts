import { Module } from '@nestjs/common';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ResolutionModule } from './resolution/resolution.module';
import { VersionsModule } from './versions/versions.module';
import { StockImagesModule } from './stock-images/stock-images.module';

@Module({
  imports: [
    FooterModule,
    HeaderModule,
    ResolutionModule,
    VersionsModule,
    StockImagesModule,
  ],
})
export class ObeliscoModule {}
