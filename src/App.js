import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer"

function App() {
  const [bookingFormOpen, setBookingFormOpen] = useState(false);

  function openBookingFormHandler() {
    setBookingFormOpen(!bookingFormOpen);
  }

  return (
    <>
      {bookingFormOpen && (
        <BookingForm onCloseLayout={openBookingFormHandler} />
      )}
      <Header onOpenLayout={openBookingFormHandler}></Header>
      <Hero onOpenLayout={openBookingFormHandler}></Hero>
      <Hightlights></Hightlights>
      <Testimonials></Testimonials>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
