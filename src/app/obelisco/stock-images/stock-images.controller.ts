import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { StockImagesService } from './stock-images.service';
import { join } from 'path';

@Controller('api/obelisco/stock-images')
export class StockImagesController {
  constructor(private readonly stockImagesService: StockImagesService) {}

  @Get()
  getImagesList() {
    try {
      return this.stockImagesService.stockImagesData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos del banco de imagenes.',
      );
    }
  }

  @Get(':id')
  async getImageById(@Param('id') id: string, @Res() res: Response) {
    try {
      const imageName = this.stockImagesService.stockImagesIndexData[id];
      if (!imageName) {
        throw new NotFoundException('ID de imagen no encontrado');
      }
      const imagePath = join(process.cwd(), 'public/stock-images/', imageName);
      return res.sendFile(imagePath);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error sirviendo la imagen');
    }
  }
}
