export interface Payload {
  payload: Root;
}

export interface Root {
  data: Data;
}

export interface Data {
  leagueId: number;
  leagueName: string;
  gw: number;
  details: ManagerDetail[];
}

export interface ManagerDetail {
  managerId: number;
  teamName: string;
  rank: number;
  eventPoints: number;
  benchedPoints: number;
  overallPoints: number;
  captain: string;
  chipPlayed: string;
  picks: ManagerPick[];
}

export interface ManagerPick {
  playerId: number;
  name: string;
  position: string;
  points: number;
  isCaptain: boolean;
  isVice: boolean;
  isBenched: boolean;
}
