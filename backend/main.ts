import {
  Req,
  Res,
  Router,
  WebApp
} from "https://deno.land/x/denorest@v4.2/mod.ts";

import { SensorController } from "./modules/sensor/sensor.controller.ts";

// Jarvis backend server
// @see https://deno.land/x/denorest@v4.2#examples


const app = new WebApp();
const router = new Router();
const port = Deno.args[0] ?? 8080;

// '/' root url handler. Returns UI web page.
router.get("/", (_req: Req, res: Res) => {
  const sensorService = new SensorService();

  res.reply = "Hello, I'm Jarvis\n"
            + "continue to /sensors";
});

// '/sensors?sensorName=<value>' api endpoint handler.
router.get("/sensors", (_req: Req, res: Res) => {
  new SensorController().handle(_req, res);
});

app.set(router);
app.listen(port);
