import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For managing client-side routing
import Terrains from "./pages/Terrains";
import Layaut from "./components/Layaut";
import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Layaut>
          <SpeedInsights />
          <Routes>
            {/* Define the route for the home page */}
            <Route path="/" element={<Home />} />
            {/* Define the route for the "Nosotros" page */}
            <Route path="/cities" element={<Terrains />} />
            {/* Define the route for the "Proyectos" page */}
            <Route path="/trends" element={<Terrains />} />
            <Route path="/erates" element={<Terrains />} />
          </Routes>
        </Layaut>
      </UserProvider>
    </Router>
  );
}
