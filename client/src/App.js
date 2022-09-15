import "./App.css";

import { Navigate, Route, Routes, Link } from "react-router-dom";

import { AllTeams } from "./views/Teams";
import { ViewTeam } from "./views/ViewTeam";
import { EditTeam } from "./views/EditTeam";
import { NewTeam } from "./views/NewTeam";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
          <Link
            to="/teams/"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Manage Players
          </Link>
          <Link
            to="/teams"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Manage Player Status
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/teams" replace />} />
        <Route path="/teams" element={<AllTeams />} />
        <Route path="/teams/:id/edit" element={<EditTeam />} />
        <Route path="/teams/:id" element={<ViewTeam />} />
        <Route path="/teams/new" element={<NewTeam />} />
      </Routes>
    </div>
  );
}

export default App;
