export interface Root {
  data: Data;
}

export interface Data {
  leagueId: number;
  name: string;
  gw: number;
  details: ManagerDetail[];
}

export interface ManagerDetail {
  managerId: number;
  teamName: string;
  snapshotRank: number;
  overallRank: number;
  eventPoints: number;
  benchedPoints: number;
  overallPoints: number;
  captain: string;
  viceCaptain: string;
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
  stats: Stats;
}

export interface Stats {
  minutesPlayed: number;
  goalsScored: number;
  assists: number;
  cleanSheets: number;
  goalsConceeded: number;
  ownGoals: number;
  penaltiesSaved: number;
  penaltiesMissed: number;
  yellowCards: number;
  redCards: number;
  bonusPoints: number;
  defcon: number;
  starts: number;
  weeklyPoints: number;
  inDreamTeam: boolean;
}
