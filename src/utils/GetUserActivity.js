import axios from 'axios';

const baseURL = axios.create({
  baseURL: "http://localhost:3000/user",
});

export const getUserMainData = (id) => baseURL.get(`/${id}`); //userStory 5, 8 & 10
export const getUserActivity = (id) => baseURL.get(`/${id}/activity`); //userStory 6
export const getUserAverageSessions = (id) => baseURL.get(`/${id}/average-sessions`); //userStory 7
export const getUserPerformance = (id) => baseURL.get(`/${id}/performance`); //userStory 9