import React, { useState } from "react";

const BookingForm = ({
  availableTimes = [],
  dispatch,
  submitForm,
  pageTitleId,
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });
  const [showErrors, setShowErrors] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const errors = {
    date: date === "" ? "Please choose a reservation date." : "",
    time: time === "" ? "Please select a reservation time." : "",
    guests:
      guests < 1 || guests > 10
        ? "Number of guests must be between 1 and 10."
        : "",
    occasion: occasion === "" ? "Please select an occasion." : "",
  };

  const visibleErrors = {
    date: (showErrors || touched.date) && errors.date,
    time: (showErrors || touched.time) && errors.time,
    guests: (showErrors || touched.guests) && errors.guests,
    occasion: (showErrors || touched.occasion) && errors.occasion,
  };

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion !== "";

  const handleDateChange = (e) => {
    const nextDate = e.target.value;
    setDate(nextDate);
    setTouched((current) => ({ ...current, date: true }));
    setSubmissionError("");

    if (dispatch) {
      dispatch({
        type: "UPDATE_TIMES",
        date: nextDate,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    if (submitForm) {
      const success = submitForm(formData);

      if (!success) {
        setSubmissionError(
          "We couldn't complete your reservation. Please try again."
        );
      }
    }
  };

  return (
    <>
      <style>{`
        .booking-page { min-height: 100vh; background: var(--color-bg-page); display: flex; align-items: center; justify-content: center; padding: var(--space-3xl) var(--space-xl); }
        .booking-card { background: var(--color-bg-card); border-radius: var(--radius-xl); border: 0.5px solid var(--color-border); padding: var(--space-3xl); width: 100%; max-width: 560px; }
        .booking-card > p { margin-bottom: var(--space-2xl); }
        .booking-card form { display: grid; gap: var(--space-sm); }
        .booking-card label { font-size: 14px; font-weight: 600; color: var(--color-text-main); margin-top: var(--space-sm); }
        .booking-card input,
        .booking-card select {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: #fffdf8;
          color: var(--color-text-main);
          font-family: var(--font-body);
          font-size: 15px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .booking-card input:focus,
        .booking-card select:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(73, 94, 87, 0.12);
          outline: none;
        }
        .booking-submit {
          margin-top: var(--space-lg);
          padding: 14px 20px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--color-accent), #f7d94c);
          color: var(--color-primary-dark);
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(244, 206, 20, 0.28);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
        }
        .booking-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 16px 30px rgba(244, 206, 20, 0.34);
          filter: saturate(1.05);
        }
        .booking-submit:focus-visible {
          outline: 3px solid rgba(73, 94, 87, 0.22);
          outline-offset: 3px;
        }
        .booking-submit:active:not(:disabled) {
          transform: translateY(1px);
          box-shadow: 0 8px 18px rgba(244, 206, 20, 0.24);
        }
        .booking-submit:disabled {
          cursor: not-allowed;
          background: #d9d9d9;
          color: #777;
          box-shadow: none;
        }
        .booking-error {
          margin: -2px 0 var(--space-xs);
          color: #b42318;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .booking-status-error {
          margin: 0 0 var(--space-sm);
          padding: 12px 14px;
          border: 1px solid rgba(180, 35, 24, 0.25);
          border-radius: var(--radius-md);
          background: #fef3f2;
          color: #b42318;
          font-size: 0.95rem;
          font-weight: 600;
        }
      `}</style>
      <section
        className="booking-page"
        aria-labelledby={pageTitleId || "booking-form-heading"}
      >
        <div className="booking-card">
          <p>Book your table at Little Lemon.</p>
          <form onSubmit={handleSubmit} aria-labelledby="booking-form-heading">
            <h3 id="booking-form-heading">Book your table</h3>
            {submissionError && (
              <p className="booking-status-error" role="alert">
                {submissionError}
              </p>
            )}

            <label htmlFor="res-date">Choose date</label>
            <input
              id="res-date"
              name="reservation-date"
              type="date"
              value={date}
              onChange={handleDateChange}
              onBlur={() =>
                setTouched((current) => ({ ...current, date: true }))
              }
              aria-required="true"
              aria-invalid={Boolean(visibleErrors.date)}
              aria-describedby={visibleErrors.date ? "res-date-error" : undefined}
              required
            />
            {visibleErrors.date && (
              <p id="res-date-error" className="booking-error" role="alert">
                {errors.date}
              </p>
            )}

            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="reservation-time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setSubmissionError("");
              }}
              onBlur={() =>
                setTouched((current) => ({ ...current, time: true }))
              }
              aria-required="true"
              aria-invalid={Boolean(visibleErrors.time)}
              aria-describedby={visibleErrors.time ? "res-time-error" : undefined}
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
            {visibleErrors.time && (
              <p id="res-time-error" className="booking-error" role="alert">
                {errors.time}
              </p>
            )}

            <label htmlFor="guests">Number of guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              value={guests}
              min="1"
              max="10"
              onChange={(e) => {
                setGuests(Number(e.target.value));
                setSubmissionError("");
              }}
              onBlur={() =>
                setTouched((current) => ({ ...current, guests: true }))
              }
              aria-required="true"
              aria-invalid={Boolean(visibleErrors.guests)}
              aria-describedby={visibleErrors.guests ? "guests-error" : undefined}
              required
            />
            {visibleErrors.guests && (
              <p id="guests-error" className="booking-error" role="alert">
                {errors.guests}
              </p>
            )}

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => {
                setOccasion(e.target.value);
                setSubmissionError("");
              }}
              onBlur={() =>
                setTouched((current) => ({ ...current, occasion: true }))
              }
              aria-required="true"
              aria-invalid={Boolean(visibleErrors.occasion)}
              aria-describedby={
                visibleErrors.occasion ? "occasion-error" : undefined
              }
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {visibleErrors.occasion && (
              <p id="occasion-error" className="booking-error" role="alert">
                {errors.occasion}
              </p>
            )}

            <button
              className="booking-submit"
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
