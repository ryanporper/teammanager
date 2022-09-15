const { Team } = require('../models/team.model');

const createTeam = async (data) => {
  console.log('service: createTeam');

  const team = await Team.create(data);
  return team;
};

const getAllTeams = async () => {
  const teams = await Team.find();
  return teams;
};

const getTeamById = async (id) => {
  const team = await Team.findById(id);
  return team;
};

const deleteTeamById = async (id) => {
  const team = await Team.findByIdAndDelete(id);
  return team;
};

const updateTeamById = async (id, data) => {
  const team = await Team.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return team;
};

module.exports = {
  createTeam: createTeam,
  getAllTeams,
  getTeamById,
  deleteTeamById,
  updateTeamById,
};