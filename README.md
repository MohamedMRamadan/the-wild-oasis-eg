<div align="center">
  <br/>
  <br/>
  <img src="/public/logo-dark.png#gh-dark-mode-only" alt="logo" width="200" height="auto" />
  <img src="/public/logo-light.png#gh-light-mode-only" alt="logo" width="200" height="auto" />
  <br/>
  <br/>
  <p>
   The Wild Oasis is an internal hotel management system built with React.js 18, MongoDB, typescript, tailwind CSS, and many other technologies. It allows employees to manage everything about hotel bookings, cabins, and guests.
  </p>

<p>
  <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/MohamedMRamadan/the-wild-oasis-eg" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/MohamedMRamadan/the-wild-oasis-eg" alt="last update" />
  </a>
  <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/network/members">
    <img src="https://img.shields.io/github/forks/MohamedMRamadan/the-wild-oasis-eg" alt="forks" />
  </a>
  <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/stargazers">
    <img src="https://img.shields.io/github/stars/MohamedMRamadan/the-wild-oasis-eg" alt="stars" />
  </a>
  <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/issues/">
    <img src="https://img.shields.io/github/issues/MohamedMRamadan/the-wild-oasis-eg" alt="open issues" />
  </a>
  <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/MohamedMRamadan/the-wild-oasis-eg.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://the-wild-oasis-egs.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/MohamedMRamadan/the-wild-oasis-eg/issues/">Request Feature</a>
  </h4>
</div>

## Features

1. **User Authentication and Signup:**

   1. Hotel employees can log in to the application to perform tasks.
   2. New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

2. **User Profile Management:**

   1. Users can upload an avatar to personalize their profile.
   2. Users can change their name and password.

3. **Cabin Management:**

   1. The app provides a table view with all cabins.
   2. The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
   3. Users can update or delete existing cabins.
   4. Users can create new cabins, including the ability to upload a photo.

4. **Booking Management:**

   1. The app provides a table view with all bookings.
   2. The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
   3. Booking status can be "unconfirmed," "checked in," or "checked out."
   4. The table view is filterable by booking status.
   5. Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

5. **Booking Operations:**

   1. Users can delete, check in, or check out a booking as the guest arrives.
   2. On check-in, users can accept payment outside the app and then confirm the payment within the app.
   3. Guests can add breakfast for the entire stay during check-in if they haven't already.

6. **Guest Data Management:**

   1. Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

7. **Dashboard:**

   1. The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
   2. It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
   3. The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
   4. It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
   5. There's also a chart displaying statistics on stay durations, an important metric for the hotel.

8. **Application-wide Settings:**

   1. Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

9. **Dark Mode:**
   1. The app includes a dark mode option for a different visual appearance and enhanced user experience in low-light conditions.

<br/>

## 💻 Technology Used

The Wild Oasis Hotel Management Application is built using the following technologies and libraries:

- **React**: JavaScript library for UI development.

- **Supabase**: Cloud database service for real-time and secure data storage.

- **@tanstack/react-query**: Data-fetching and state management library for React.

- **date-fns**: JavaScript date utility library for parsing, formatting, and manipulating dates.

- **react-router-dom**: Library for routing and navigation in React apps.

- **recharts**: Composable charting library for React.

- **styled-components**: CSS-in-JS library for styling React components.

- **react-hot-toast**: Customizable toast notification library for React.

- **react-icons**: Collection of customizable icons for React apps.

- **react-hook-form**: Library for form state management and validation in React.

<br/>

## 🎮 Demo Account

You can access our application using the following demo account:

-   **Email Address** : `test@test.com`
-   **Password** : `12345678`

<br/>

## Setup Instructions

To run this project locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/MohamedMRamadan/the-wild-oasis-eg.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Configure Supabase and add the necessary environment variables in a `.env` file. Check out the `.env.example` for reference.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Author

<b>😁 Mohamed ramadan</b>

- LinkedIn - [@MohamedRamadan](https://www.linkedin.com/in/mohamed-ramadan-a4099b208/)
- GitHub - [@MohamedRamadan](https://github.com/MohamedMRamadan)

Feel free to contact me with any questions or feedback!


