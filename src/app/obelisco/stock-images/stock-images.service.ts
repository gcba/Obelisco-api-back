import { Injectable } from '@nestjs/common';

@Injectable()
export class StockImagesService {
  private host = process.env.HOST || 'http://localhost:3000';

  private _stockImagesData = {
    images: [
      {
        id: 1,
        name: 'logotipo_ba_secundario.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/1`,
      },
      {
        id: 2,
        name: 'logotipo_ba_sinclaim_secundario.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/2`,
      },
      {
        id: 3,
        name: 'logotipo_ba_sinclaim_sobrecolor.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/3`,
      },
      {
        id: 4,
        name: 'logotipo_ba_sinclaim.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/4`,
      },
      {
        id: 5,
        name: 'logotipo_ba_sobrecolor.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/5`,
      },
      {
        id: 6,
        name: 'logotipo_ba.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/6`,
      },
      {
        id: 7,
        name: 'logotipo_buenos_aires_mobile.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/7`,
      },
      {
        id: 8,
        name: 'logotipo_buenos_aires_secundario.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/8`,
      },
      {
        id: 9,
        name: 'logotipo_buenos_aires.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/stock-images/9`,
      },
    ],
  };

  private _stockImagesIndexData = {
    1: 'logotipo_ba_secundario.svg',
    2: 'logotipo_ba_sinclaim_secundario.svg',
    3: 'logotipo_ba_sinclaim_sobrecolor.svg',
    4: 'logotipo_ba_sinclaim.svg',
    5: 'logotipo_ba_sobrecolor.svg',
    6: 'logotipo_ba.svg',
    7: 'logotipo_buenos_aires_mobile.svg',
    8: 'logotipo_buenos_aires_secundario.svg',
    9: 'logotipo_buenos_aires.svg',
  };

  public get stockImagesData() {
    return this._stockImagesData;
  }

  public get stockImagesIndexData() {
    return this._stockImagesIndexData;
  }
}
