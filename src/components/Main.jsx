import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "../api";
import { initializeTimes, updateTimes } from "./bookingTimes";

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }

    return success;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
