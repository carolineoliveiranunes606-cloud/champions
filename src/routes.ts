import { Router } from "express";

const router = Router();

const teams = [
  {
    id: 1,
    name: "Real Madrid",
    country: "Spain",
    stadium: "Santiago Bernabéu",
  },
  {
    id: 2,
    name: "Manchester City",
    country: "England",
    stadium: "Etihad Stadium",
  },
  {
    id: 3,
    name: "Bayern Munich",
    country: "Germany",
    stadium: "Allianz Arena",
  },
  {
    id: 4,
    name: "PSG",
    country: "France",
    stadium: "Parc des Princes",
  },
];

const players = [
  {
    id: 1,
    name: "Kylian Mbappé",
    team: "Real Madrid",
    overall: 92,
  },
  {
    id: 2,
    name: "Erling Haaland",
    team: "Manchester City",
    overall: 91,
  },
  {
    id: 3,
    name: "Harry Kane",
    team: "Bayern Munich",
    overall: 90,
  },
  {
    id: 4,
    name: "Ousmane Dembélé",
    team: "PSG",
    overall: 87,
  },
];

router.get("/health", (_, response) => {
  return response.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

router.get("/teams", (_, response) => {
  return response.status(200).json({
    success: true,
    total: teams.length,
    data: teams,
  });
});

router.get("/players", (_, response) => {
  return response.status(200).json({
    success: true,
    total: players.length,
    data: players,
  });
});

router.get("/players/top-rated", (_, response) => {
  const elitePlayers = players.filter((player) => player.overall >= 90);

  return response.status(200).json({
    success: true,
    data: elitePlayers,
  });
});

router.get("/teams/:id", (request, response) => {
  const id = Number(request.params.id);

  const team = teams.find((team) => team.id === id);

  if (!team) {
    return response.status(404).json({
      success: false,
      error: "Team not found",
    });
  }

  return response.status(200).json({
    success: true,
    data: team,
  });
});

export default router;
