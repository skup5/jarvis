import {Id, Params} from "@feathersjs/feathers";
import {SensorService} from "./sensor.service.ts"

export class SensorController {

  private sensorService: SensorService;

  constructor(sensorService: SensorService = new SensorService()) {
    this.sensorService = sensorService
  }

  /**
   * GET /sensors api endpoint handler
   */
  async find(params: Params) {
    console.debug("GET /sensors")

    const sensorName = params?.query?.sensorName ?? null
    if (sensorName) {

      let sensorDetail = this.sensorService.getSensorByName(sensorName);
      console.debug(`Returns sensor by sensorName=${sensorName}`)
      return sensorDetail

    } else {
      console.debug("Returns all sensors")
      return this.sensorService.getAllSensors()
    }
  }

  async get(id: Id) {
    console.debug(`GET /sensors/${id}`)

    return this.sensorService.getSensorById(id.toString())
  }

  async getMeasuredValues(id: Id) {
    console.debug(`GET /sensors/${id}/measured-values`)

    return this.sensorService.getMeasuredValuesOfSensor(id.toString())
  }

}
