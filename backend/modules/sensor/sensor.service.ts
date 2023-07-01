import { Sensor } from './sensor.dto.ts'
export class SensorService {

  constructor() {}

  getAllSensors(): Array<Sensor> {
    return [
      this.getDht11SensorMock()
    ];
  }

  /**
   * [getSensorByName description]
   * @param  {String} sensorName [description]
   * @return {Sensor|undefined}  [description]
   */
  getSensorByName(sensorName: String): Sensor | undefined {
    let sensor;

    switch (sensorName) {
      case "dht11" : sensor = this.getDht11SensorMock(); break;
      default: sensor = undefined;
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
