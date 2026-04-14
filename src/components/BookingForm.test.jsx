import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import BookingForm from "./BookingForm";

const renderForm = ({ dispatch = () => {}, submitForm = () => {} } = {}) => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={dispatch}
      submitForm={submitForm}
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

test("dispatches an update action when the date changes", () => {
  const mockDispatch = vi.fn();
  renderForm({ dispatch: mockDispatch });

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-04-04" },
  });

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    date: "2026-04-04",
  });
});

test("submit button is disabled when form is invalid", () => {
  renderForm();

  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
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

test("form submits when valid", () => {
  const mockSubmit = vi.fn(() => true);

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

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2026-04-04",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });
});

test("shows a user-facing message when submission fails", () => {
  const mockSubmit = vi.fn(() => false);

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
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

  expect(mockSubmit).toHaveBeenCalled();
  expect(
    screen.getByText("We couldn't complete your reservation. Please try again.")
  ).toBeInTheDocument();
});

test("shows visible validation messages after interacting with invalid fields", () => {
  renderForm();

  fireEvent.blur(screen.getByLabelText(/choose date/i));
  fireEvent.blur(screen.getByLabelText(/choose time/i));
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "0" },
  });
  fireEvent.blur(screen.getByLabelText(/number of guests/i));

  expect(
    screen.getByText("Please choose a reservation date.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Please select a reservation time.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Number of guests must be between 1 and 10.")
  ).toBeInTheDocument();
});
