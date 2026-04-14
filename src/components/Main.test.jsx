import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import { fetchAPI, submitAPI } from "../api";
import Main from "./Main";
import { initializeTimes, updateTimes } from "./bookingTimes";

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

describe("Main booking flow", () => {
  test("navigates to the confirmation page after a successful submit", () => {
    submitAPI.mockReturnValue(true);

    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Main />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-04" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit booking form/i }));

    expect(submitAPI).toHaveBeenCalledWith({
      date: "2026-04-04",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    });
    expect(
      screen.getByRole("heading", { name: /booking confirmed/i })
    ).toBeInTheDocument();
  });
});
