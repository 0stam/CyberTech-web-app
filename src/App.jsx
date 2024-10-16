import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Footer } from "./components/Footer/Footer";
import { LinkProvider } from "./components/Navbar/ChosenLinkContext";
import { ContactUs } from "./components/ContactUs/ContactUs";

function App() {
  
  return (
    <div className="whole-app">
      <ThemeProvider>
        <LinkProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        <Footer/>
        </LinkProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
