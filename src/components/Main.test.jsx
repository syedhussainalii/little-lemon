import { describe, expect, test, vi } from "vitest";
import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api";

vi.mock("../api", () => ({
  fetchAPI: vi.fn(() => ["17:00", "18:00", "19:00"]),
  submitAPI: vi.fn(() => true),
}));

describe("Main reducer helpers", () => {
  test("initializeTimes returns available times from API", () => {
    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns updated times based on selected date", () => {
    const state = [];
    const action = {
      type: "UPDATE_TIMES",
      date: "2026-04-04",
    };

    const result = updateTimes(state, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date("2026-04-04"));
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns the same state for unknown actions", () => {
    const state = ["17:00", "18:00"];

    expect(updateTimes(state, { type: "UNKNOWN" })).toEqual(state);
  });
});
