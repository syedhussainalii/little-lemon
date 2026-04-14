# Little Lemon

A responsive React application for the Little Lemon restaurant. The site highlights featured dishes, tells the restaurant story, and lets guests reserve a table through an accessible booking flow.

## Features

- Homepage sections for hero content, specials, testimonials, and restaurant story
- Reservation form with inline validation and accessible error messages
- Dynamic reservation times driven by the provided booking API helpers
- Confirmation route after a successful booking
- User-facing error message when a reservation submission fails
- Linting and component tests with ESLint and Vitest

## Tech Stack

- React 19
- Vite 7
- React Router
- ESLint 9
- Vitest and Testing Library

## Project Structure

```text
src/
  api.js                  Mock booking API helpers
  App.jsx                 Top-level layout and hash scrolling
  components/
    BookingForm.jsx       Reservation form UI and validation
    BookingPage.jsx       Reservation page wrapper
    Main.jsx              App routes and booking submission flow
```

## Routes

- `/` - homepage
- `/booking` - reservation form
- `/confirmed` - confirmation page shown after a successful booking

## Getting Started

### Prerequisites

- Node.js 20+ or newer
- npm

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Run tests

```bash
npm run test
```

## Booking Notes

- Available reservation times are generated from the selected date through `fetchAPI`.
- Successful submissions navigate to the confirmation page.
- Failed submissions keep the user on the booking page and display a retry message.

## Accessibility Notes

- Booking form fields use labels, `aria-invalid`, and inline error text.
- Submission failures are announced with an alert message.
- Section navigation works with hash links for the homepage content.
