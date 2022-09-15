import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  deleteTeamById,
  getAllTeams,
} from "../services/internalApiService";

export const AllTeams = (props) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams()
      .then((data) => {
        console.log(data);
        setTeams(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (idToDelete) => {
    deleteTeamById(idToDelete)
      .then((deletedTeam) => {
        const filteredTeams = teams.filter((team) => {
          return team._id !== idToDelete;
        });

        console.log("deletedTeam:", deletedTeam);
        setTeams(filteredTeams);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
          <div className="navbar-nav justify-content-between">
            <Link
              to="/teams"
              className="btn btn-outline-primary mx-1"
            >
              List
            </Link>
            <Link
              to="/teams/new"
              className="btn btn-outline-primary mx-1"
            >
              Add Player
            </Link>
          </div>
        </nav>

      {teams.map((team) => {
        const { _id, name, pos } = team;

        return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th><h3>Team</h3></th>
                <th><h3>Position</h3></th>
                <th><h3>Actions</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to={`/teams/${_id}`}>
                    <h4>{name}</h4>
                  </Link>
                </td>
                <td><h4>{pos}</h4></td>
                <td>
                  {/* <Link
                    to={`/teams/${_id}/edit`}
                    className="btn btn-warning mx-1"
                  >
                    Edit
                  </Link> */}
                  <button
                    onClick={(e) => {
                      handleDeleteClick(_id);
                    }}
                    className="btn btn-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default AllTeams;