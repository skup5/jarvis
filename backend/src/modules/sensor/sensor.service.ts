import {Sensor} from './sensor.dto.ts'

export class SensorService {

  constructor() {
  }

  /**
   * Returns infromation from all connected sensors.
   */
  getAllSensors(): Array<Sensor> {
    return [
      this.getDht11SensorMock()
    ];
  }

  /**
   * Returns infromation from connected sensor.
   *
   * Tries to find wanted sensor by specific name. If there is more sensors with the given name,
   * returns the first one. If there is none sensor with the given name, returns undefined.
   *
   * @param  {String} sensorName 'dht11' for example
   * @return {Sensor|undefined}  first sensor with the given name or undefined
   */
  getSensorByName(sensorName: String): Sensor | undefined {
    let sensor;

    switch (sensorName) {
      case "dht11" :
        sensor = this.getDht11SensorMock();
        break;
      default:
        sensor = undefined;
    }

    return sensor as Sensor;
  }

  private getDht11SensorMock(): Sensor {
    return {
      id: "abcd-1234",
      name: "dht11",
      description: "Teploměr a vlhkoměr",
      location: "Obývák"
    };
  }
}
