import {feathers} from '@feathersjs/feathers'
import {koa, rest, bodyParser, errorHandler, serveStatic} from '@feathersjs/koa'

import {SensorController} from "./modules/sensor/sensor.controller.ts";
import {argv} from 'node:process';

// Jarvis backend server
// @see https://deno.land/x/denorest@v4.2#examples


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
const app = koa<ServiceTypes>(feathers())

// Use the current folder for static file hosting
app.use(serveStatic('.'))
// Register the error handle
app.use(errorHandler())
// Parse JSON request bodies
app.use(bodyParser())

// Register REST service handler
app.configure(rest())
// Register our messages service
app.use('sensors', new SensorController())


// Start the server
app.listen(port).then(() => console.log(`Feathers server listening on localhost:${port}`))

