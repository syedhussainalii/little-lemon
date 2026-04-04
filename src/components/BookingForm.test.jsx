import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import BookingForm from "./BookingForm";

const renderForm = () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
};

test("date input has required attribute", () => {
  renderForm();
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  renderForm();
  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("submit button is disabled when form is invalid", () => {
  renderForm();

  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", async () => {
  renderForm();

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const button = screen.getByRole("button");

  fireEvent.change(dateInput, { target: { value: "2026-04-04" } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });

  expect(button).not.toBeDisabled();
});

test("form submits when valid", async () => {
  const mockSubmit = vi.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const button = screen.getByRole("button");

  fireEvent.change(dateInput, { target: { value: "2026-04-04" } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });

  fireEvent.click(button);

  expect(mockSubmit).toHaveBeenCalled();
});
