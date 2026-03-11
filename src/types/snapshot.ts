export type Standing = {
  teamName: string;
  leagueRank: number;
  points: number;
  overallRank: number;
  chipPlay: string;
  captain: string;
  viceCaptain: string;
};

export type Player = {
  position: string;
  name: string;
  points: number;
  isCaptain: boolean;
  isVice: boolean;
};

export type ManagerMetadata = {
  name: string;
  points: number;
  rank: string;
};
