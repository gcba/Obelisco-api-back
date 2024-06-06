import { Injectable, NotFoundException } from '@nestjs/common';
import { Area } from './interfaces/government-areas.interfaces';
import {
  CHIEF_OF_CABINET_OF_MINISTERS,
  CHIEF_OF_GOVERNMENT,
  MINISTRY_OF_CULTURE,
  MINISTRY_OF_ECONOMIC_DEVELOPMENT,
  MINISTRY_OF_EDUCATION,
  MINISTRY_OF_FINANCE,
  MINISTRY_OF_HEALTH,
  MINISTRY_OF_HUMAN_DEVELOPMENT_AND_HOUSING,
  MINISTRY_OF_INFRASTRUCTURE,
  MINISTRY_OF_JUSTICE,
  MINISTRY_OF_PUBLIC_SPACE_AND_URBAN_HYGIENE,
  MINISTRY_OF_SECURITY,
  VICE_CHIEF_OF_GOVERNMENT,
} from './constant/government-areas.constant';

@Injectable()
export class GovernmentAreasService {
  private _chiefOfGovernment: Area = CHIEF_OF_GOVERNMENT;

  private _viceChiefOfGovernment: Area = VICE_CHIEF_OF_GOVERNMENT;

  private _chiefOfCabinetOfMinisters: Area = CHIEF_OF_CABINET_OF_MINISTERS;

  private _ministryOfCulture: Area = MINISTRY_OF_CULTURE;

  private _ministryOfEconomicDevelopment: Area =
    MINISTRY_OF_ECONOMIC_DEVELOPMENT;

  private _ministryOfHumanDevelopmentAndHousing: Area =
    MINISTRY_OF_HUMAN_DEVELOPMENT_AND_HOUSING;

  private _ministryOfEducation: Area = MINISTRY_OF_EDUCATION;

  private _ministryOfJustice: Area = MINISTRY_OF_JUSTICE;

  private _ministryOfSecurity: Area = MINISTRY_OF_SECURITY;

  private _ministryOfHealth: Area = MINISTRY_OF_HEALTH;

  private _ministryOfPublicSpaceAndUrbanHygiene: Area =
    MINISTRY_OF_PUBLIC_SPACE_AND_URBAN_HYGIENE;

  private _ministryOfFinance: Area = MINISTRY_OF_FINANCE;

  private _ministryOfInfrastructure: Area = MINISTRY_OF_INFRASTRUCTURE;

  private _governmentAreas: { areas: Area[] } = {
    areas: [
      this._chiefOfGovernment,
      this._viceChiefOfGovernment,
      this._chiefOfCabinetOfMinisters,
      this._ministryOfCulture,
      this._ministryOfEconomicDevelopment,
      this._ministryOfHumanDevelopmentAndHousing,
      this._ministryOfEducation,
      this._ministryOfJustice,
      this._ministryOfSecurity,
      this._ministryOfHealth,
      this._ministryOfPublicSpaceAndUrbanHygiene,
      this._ministryOfFinance,
      this._ministryOfInfrastructure,
    ],
  };

  private _governmentAreasIndexData = {
    1: 'Jefatura de Gobierno',
    2: 'Vicejefatura de Gobierno',
    3: 'Jefatura de Gabinete de Ministros',
    4: 'Ministerio de Cultura',
    5: 'Ministerio de Desarrollo Económico',
    6: 'Ministerio de Desarrollo humano y Habitat',
    7: 'Ministerio de Educación',
    8: 'Ministerio de Justicia',
    9: 'Ministerio de Seguridad',
    10: 'Ministerio de Salud',
    11: 'Ministerio de Espacio Público e Higiene Urbana',
    12: 'Ministerio de Hacienda y Finanzas',
    13: 'Ministerio de Infraestructura',
  };

  public get governmentAreasAllData() {
    return this._governmentAreas;
  }

  public get governmentAreasIndexData() {
    return this._governmentAreasIndexData;
  }

  public getAreaById(areaId: number): Area {
    const area = this._governmentAreas.areas.find((area) => {
      return area.id === areaId;
    });

    if (!area) {
      throw new NotFoundException(`Area with id ${areaId} not found`);
    }

    return area;
  }
}
