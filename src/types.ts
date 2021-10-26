export type Fixture = {
  id: number,
  date: Date,
  periods: {
    first: number | null,
    second: number | null,
  },
  referee: string | null,
  status: {
    elapsed: number | null,
    long: string,
    short: string
  },
  timestamp: number,
  timezone: string,
  venue: {
    id: number,
    city: string,
    name: string
  }
};

export type League = {
  id: number,
  country: string,
  flag: string,
  logo: string,
  name: string,
  round: string,
  season: number
};

export type Goals = {
  home: number | 'TBA' | null,
  away: number | 'TBA' | null
};

export type MatchData = {
  fixture: Fixture,
  goals: Goals
  league: League,
  score: {
    extratime: Goals,
    fulltime: Goals,
    halftime: Goals,
    penalty: Goals
  },
  teams: {
    home: {
      id: number,
      name: string,
      logo: string,
      winner: boolean
    },
    away: {
      id: number,
      name: string,
      logo: string,
      winner: boolean
    }
  }
};

export type Response = {
  response: MatchData[]
};