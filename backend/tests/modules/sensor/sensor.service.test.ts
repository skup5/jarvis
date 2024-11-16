import {SensorService} from "../../../src/modules/sensor/sensor.service.ts"

describe("SensorService", () => {
  let service: SensorService;

  beforeEach(() => {
    service = new SensorService();
  });

  it("getAllSensors", () => {
    expect(service.getAllSensors())
      .toEqual(
        [
          expect.objectContaining({
            name: "dht11",
            description: "Teploměr a vlhkoměr",
            location: "Čikiny pokoj"
          })
        ]
      );
  });

  it("getSensorByName_found", () => {
    expect(service.getSensorByName("dht11"))
      .toEqual(
        expect.objectContaining({
          name: "dht11",
          description: "Teploměr a vlhkoměr",
          location: "Čikiny pokoj"
        })
      )
  });

  it("getSensorByName_notFound", () => {
    expect(service.getSensorByName("non-existing"))
      .toEqual(undefined);
  });

});
