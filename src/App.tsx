import React from 'react';
import {Route, Routes} from "react-router";

// COMPONENTS
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// PAGES FOR ROUTING
import Homepage from "./pages/Homepage";
import About from "./pages/about/About";
import Information from "./pages/information/Information";
import Gallery from "./pages/gallery/Gallery";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path={"/"}
          element={<Homepage />}
        />
        <Route
          path={"/about"}
          element={<About />}
        />
        <Route
          path={"/information"}
          element={<Information />}
        />
        <Route
          path={"/gallery"}
          element={<Gallery />}
        />
        <Route
          path={"/calendar"}
          element={<Calendar />}
        />
        <Route
          path={"/contact"}
          element={<Contact />}
        />
        <Route
          path={"/post/:id"}
          element={<Post/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
