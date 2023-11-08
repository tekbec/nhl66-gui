export interface Stateshot {
  configs: any;
  games: Game[];
  links: Link[];
}

export interface Game {
  id: number;
  start_datetime: string;
  status: GameStatus;
  status_desc: string;
  winner: string;
  is_recent: boolean;
  predictable: boolean;
  content_id_list: string[];
  away_id: string;
  away_name: string;
  away_abr: string;
  away_short: string;
  away_odd: string;
  away_score: number;
  home_id: string;
  home_name: string;
  home_abr: string;
  home_short: string;
  home_odd: string;
  home_score: number;
}

export interface Link {
  id: number;
  content_id: string;
  event_datetime: string;
  expires_at: string;
  flavors: LinkFlavor[];
  geo: string;
  provider: string;
  status: LinkStatus;
  url?: string;
}

export interface LinkFlavor {
  name: string;
  premium: boolean;
  slug: string;
  unique_id: string;
}

export enum LinkStatus {
  PLANNED = 'P',
  DELAYED = 'M',
  LIVE = 'L',
  REPLAY = 'R',
  BUGGED = 'E'
}

export enum GameStatus {
  LIVE = 'I',
  PREGAME = 'P',
  FINAL = 'F'
}
