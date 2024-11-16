import {Sensor} from './sensor.dto.ts'
import {randomUUID} from 'node:crypto';

export class SensorService {

  private readonly sensors: Sensor[] = [
    {
      id: randomUUID(),
      name: 'dht11',
      description: "Teploměr a vlhkoměr",
      location: "Čikiny pokoj"
    } as Sensor
  ]

  /**
   * Returns information from all connected sensors.
   */
  getAllSensors(): Array<Sensor> {
    return this.sensors;
  }

  /**
   * Returns information from connected sensor.
   *
   * Tries to find wanted sensor by specific name. If there is more sensors with the given name,
   * returns the first one. If there is none sensor with the given name, returns undefined.
   *
   * @param  {String} sensorName 'dht11' for example
   * @return {Sensor|undefined}  first sensor with the given name or undefined
   */
  getSensorByName(sensorName: String): Sensor | undefined {
    return this.sensors.find(sensor => sensor.name === sensorName);
  }

}
