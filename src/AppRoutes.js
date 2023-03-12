import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GearPage from "./components/GearPage";
import SingleGearPage from "./components/SingleGearPage";
import SearchResultsPage from "./components/SearchResultsPage";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gear" element={<GearPage />} />
                <Route path="/gear/:id" element={<SingleGearPage />} />
                <Route path="/gear/search" element={<SearchResultsPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
