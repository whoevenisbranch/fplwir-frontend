export type Standing = {
  managerId: number;
  teamName: string;
  leagueRank: number;
  points: number;
  benchedPoints: number;
  chipPlay: string;
  captain: string;
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
