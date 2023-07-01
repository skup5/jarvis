import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
  assertArrayIncludes
} from "https://deno.land/std@0.187.0/testing/asserts.ts";
import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.187.0/testing/bdd.ts";

import { SensorService } from "./sensor.service.ts";

describe("SensorService", () => {
   let service: SensorService;

    beforeEach(() => {
      service = new SensorService();
    });

    it("getAllSensors", () => {
      assertArrayIncludes(
        service.getAllSensors(),
        [
          {
            id: "abcd-1234",
            name: "dht11",
            description: "Teploměr a vlhkoměr",
            location: "Obývák"
          }
        ]
      );
    });

    it("getSensorByName_found", () => {
      assertEquals(
        service.getSensorByName("dht11"),
        {
            id: "abcd-1234",
            name: "dht11",
            description: "Teploměr a vlhkoměr",
            location: "Obývák"
        }
      );
    });

    it("getSensorByName_notFound", () => {
      assertEquals(
        service.getSensorByName("non-existing"),
        undefined
      );
    });
});
