import {SensorService} from "../../../src/modules/sensor/sensor.service"

describe("SensorService", () => {
  let service: SensorService;

  beforeEach(() => {
    service = new SensorService();
  });

  it("getAllSensors", () => {
    expect(service.getAllSensors())
      .toEqual(
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
    expect(service.getSensorByName("dht11"))
      .toEqual(
        {
          id: "abcd-1234",
          name: "dht11",
          description: "Teploměr a vlhkoměr",
          location: "Obývák"
        }
      );
  });

  it("getSensorByName_notFound", () => {
    expect(service.getSensorByName("non-existing"))
      .toEqual(undefined);
  });

});
