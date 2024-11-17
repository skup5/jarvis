import {feathers, Id, Params} from '@feathersjs/feathers'
import express, {errorHandler, json, rest, serveStatic} from '@feathersjs/express'
import {argv} from 'node:process';

import {SensorController} from "./modules/sensor/sensor.controller.ts";

// Jarvis backend server


const port = Number.isInteger(argv[2]) ? Number.parseInt(argv[2]) : 8080;

// '/' root url handler. Returns UI web page.
//router.get("/", (_req: Req, res: Res) => {
//  const sensorService = new SensorService();
//
//  res.reply = "Hello, I'm Jarvis\n"
//            + "continue to /sensors";
//});

// This tells TypeScript what services we are registering
type ServiceTypes = {
  sensors: SensorController
}

// Creates an KoaJS compatible Feathers application
const app = express(feathers())

// Use the current folder for static file hosting
app.use(serveStatic('.'))
// Register the error handle
app.use(errorHandler())
// Parse JSON request bodies
app.use(json())

// Register REST service handler
app.configure(rest())

const sensorController = new SensorController();
// Register our sensor REST controller
app.use('sensors', sensorController)
// Register custom endpoints
app.use('sensors/:sensorId/measured-values', {
  async get(id:Id, params: Params) {
    return sensorController.getMeasuredValues(id)
  },

  async find(params: Params) {
    return sensorController.getMeasuredValues(params.route?.sensorId)
  }
})

// Start the server
app.listen(port).then(() => console.log(`Feathers server listening on localhost:${port}`))

