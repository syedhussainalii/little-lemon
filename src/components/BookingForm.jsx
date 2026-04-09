import React, { useState } from "react";

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const nextDate = e.target.value;
    setDate(nextDate);

    if (dispatch) {
      dispatch({
        type: "UPDATE_TIMES",
        date: nextDate,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    if (submitForm) {
      submitForm(formData);
    }
  };

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion !== "";

  return (
    <>
      <style>{`
        .booking-page { min-height: 100vh; background: var(--color-bg-page); display: flex; align-items: center; justify-content: center; padding: var(--space-3xl) var(--space-xl); }
        .booking-card { background: var(--color-bg-card); border-radius: var(--radius-xl); border: 0.5px solid var(--color-border); padding: var(--space-3xl); width: 100%; max-width: 560px; }
        .booking-card h2 { margin-bottom: var(--space-sm); }
        .booking-card p  { margin-bottom: var(--space-2xl); }
      `}</style>
      <section className="booking-page" aria-labelledby="booking-page-title">
        <div className="booking-card">
          <h2 id="booking-page-title">Reserve a Table</h2>
          <p>Book your table at Little Lemon.</p>
          <form onSubmit={handleSubmit} aria-labelledby="booking-form-heading">
            <h3 id="booking-form-heading">Book your table</h3>

            <label htmlFor="res-date">Choose date</label>
            <input
              id="res-date"
              name="reservation-date"
              type="date"
              value={date}
              onChange={handleDateChange}
              aria-required="true"
              aria-invalid={date === ""}
              required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="reservation-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              aria-required="true"
              aria-invalid={time === ""}
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              value={guests}
              min="1"
              max="10"
              onChange={(e) => setGuests(Number(e.target.value))}
              aria-required="true"
              aria-invalid={guests < 1 || guests > 10}
              required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              aria-required="true"
              aria-invalid={occasion === ""}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <button
              type="submit"
              aria-label="Submit booking form"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
