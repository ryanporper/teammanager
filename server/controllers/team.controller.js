const {
    createTeam,
    getAllTeams,
    getTeamById,
    deleteTeamById,
    updateTeamById,
  } = require('../services/team.service');
  
  const handleCreateTeam = async (req, res) => {
    console.log('controller: handleCreateTeam req.body:', req.body);
  
    try {
      const team = await createTeam(req.body);S
      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetAllTeams = async (req, res) => {
    try {
      const teams = await getAllTeams();
      return res.json(teams);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetTeamById = async (req, res) => {
    try {
      const team = await getTeamById(req.params.id);
      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeleteTeamById = async (req, res) => {
    try {
      const team = await deleteTeamById(req.params.id);
      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdateTeamById = async (req, res) => {
    try {
      const team = await updateTeamById(req.params.id, req.body);
      return res.json(team);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  module.exports = {
    handleCreateTeam: handleCreateTeam,
    handleGetAllTeams,
    handleGetTeamById,
    handleDeleteTeamById,
    handleUpdateTeamById,
  };