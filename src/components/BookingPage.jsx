import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section className="card">
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
};

export default BookingPage;
