import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./ui/navbar/Navbar";
import Home from "./pages/home/Home";
import Timetable from "./pages/timetable/Timetable";
import Discussion from "./pages/discussion/Discussion";
import ShareResources from "./pages/share-resources/ShareResources";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="discussion" element={<Discussion />} />
          <Route path="share-resources" element={<ShareResources />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
