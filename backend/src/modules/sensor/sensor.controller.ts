import {
  Req,
  Res,
  pathParse
} from "https://deno.land/x/denorest@v4.2/mod.ts";

import { SensorService } from "./sensor.service.ts"

export class SensorController {
  
  private sensorService: SensorService;

  constructor() {
    this.sensorService = new SensorService();
  }

  /**
   * /sensors api endpoint handler
   * @param {Req} _req [description]
   * @param {Res} res  [description]
   */
  handle(_req: Req, res: Res) {
    const paramsAndQuery = pathParse(_req);
    const sensorName = paramsAndQuery.query?.sensorName;
    if (sensorName) {
      let sensorDetail = this.sensorService.getSensorByName(sensorName);
      if (sensorDetail) {
        res.reply = JSON.stringify(sensorDetail);
      } else {
        res.reply = JSON.stringify({ error: `Sensor with name '${sensorName}' not found.`});
        res.status = 404;
      }
    } else {
      res.reply = JSON.stringify(this.sensorService.getAllSensors());
    }
  }

}