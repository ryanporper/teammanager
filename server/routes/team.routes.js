const express = require('express');

const {
  handleCreateTeam,
  handleGetAllTeams,
  handleGetTeamById,
  handleDeleteTeamById,
  handleUpdateTeamById,
} = require('../controllers/team.controller');

const router = express.Router();

router.post('/', handleCreateTeam);
router.get('/:id', handleGetTeamById);
router.get('/', handleGetAllTeams);
router.delete('/:id', handleDeleteTeamById);
router.put('/:id', handleUpdateTeamById);

module.exports = { teamRouter: router }; 