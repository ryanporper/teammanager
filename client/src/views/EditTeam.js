import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {
  getTeamById,
  updateTeamById,
} from '../services/internalApiService';

export const EditTeam = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pos, setPos] = useState('');
  const [errors, setErrors] = useState(null);


  useEffect(() => {
    getTeamById(id)
      .then((data) => {
        setName(data.name);
        setPos(data.pos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditTeamSubmit = (event) => {
    event.preventDefault();

    const editedTeam = {
      name,
      pos    
    };

    updateTeamById(id, editedTeam)
      .then((updatedTeam) => {
        console.log('updatedTeam:', updatedTeam);
        navigate(`/teams`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

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
      <div className="p-4 rounded mx-auto shadow">
        <form onSubmit={(e) => handleEditTeamSubmit(e)}>
          <div className="form-group">
            <label className="h6">Name:</label>
            {errors?.name && (
                <span style={{ color: 'red' }}> {errors?.name?.message}</span>
            )}
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
              className="form-control"
              value={name}
            />
          </div>

          <div className="form-group">
            <label className="h6">Position:</label>
            <input
              onChange={(event) => {
                setPos(event.target.value);
              }}
              type="text"
              className="form-control"
              value={pos}
            />
          </div>

          <button className="btn btn-sm btn-outline-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditTeam;