import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllTeams = async () => {
  const res = await http.get('/teams');
  return res.data;
};

export const getTeamById = async (id) => {
  const res = await http.get(`/teams/${id}`);
  return res.data;
};

export const createTeam = async (data) => {
  const res = await http.post('/teams', data);
  return res.data;
};

export const updateTeamById = async (id, data) => {
  const res = await http.put(`/teams/${id}`, data);
  return res.data;
};

export const deleteTeamById = async (id) => {
  const res = await http.delete(`/teams/${id}`);
  return res.data;
};