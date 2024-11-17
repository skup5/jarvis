import {PhysicalQuantityDto} from './physical-quantity.dto.ts';

export type MeasuredValuesDto = {
  sensorId: string;
  values: PhysicalQuantityDto[]
}
