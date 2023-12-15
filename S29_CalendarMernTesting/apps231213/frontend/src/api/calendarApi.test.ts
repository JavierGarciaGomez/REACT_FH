import { describe, expect, test } from "vitest";
import calendarApi from "../../src/api/calendarApi";

describe("Pruebas en el CalendarApi", () => {
  test("debe de tener la configuración por defecto", () => {
    console.log(process.env.VITE_API_URL);
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test("should add the authentication token to the request headers", () => {
    localStorage.setItem("token", "my-token");

    calendarApi.get("/events").then((response) => {
      expect(response.headers["x-token"]).toBe("my-token");
      expect(response.headers.Authorization).toBe("my-token");
    });
  });
});
