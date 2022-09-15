import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {
  deleteTeamById,
  getTeamById,
} from '../services/internalApiService';

export const ViewTeam = (props) => {
  const [team, setTeam] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTeamById(id)
      .then((data) => {
        console.log(data);
        setTeam(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (team === null) {
    return null;
  }

  const handleDeleteClick = () => {
    deleteTeamById(id)
      .then((deletedTeam) => {
        navigate('/teams');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { name, pos} =
    team;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
          <Link to="/teams" className="btn btn-outline-primary mx-1">
            List
          </Link>
          <Link to="/teams/new" className="btn btn-outline-primary mx-1">
            Add Player
          </Link>
        </div>
      </nav>
      <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
        <h4>Name: {name}</h4>
        <h4>Position: {pos}</h4>
    
        <div className="mt-2">
          <button
            onClick={(e) => {
              handleDeleteClick();
            }}
            className="btn btn-danger mx-1"
          >
            Delete
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;