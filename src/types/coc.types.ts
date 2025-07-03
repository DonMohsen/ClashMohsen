//!Single Player Interface...........................................................................................................
export interface CocPlayerType {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel?: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel?: number;
  builderBaseTrophies?: number;
  bestBuilderBaseTrophies?: number;
  role?: string;
  warPreference?: string;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan?: Clan;
  league?: League;
  builderBaseLeague?: LeagueSummary;
  legendStatistics?: LegendStatistics;
  achievements: Achievement[];
  playerHouse?: PlayerHouse;
  labels: Label[];
  troops: Troop[];
  heroes: Hero[];
  heroEquipment: heroEquipment[];
  spells: Spell[];
}
export interface Hero {
  name: string;
    village: string;

  level: number;
  maxLevel: number;
  equipment?: heroEquipment;
}
export interface heroEquipment {
  name: string;
  village: string;
  level: number;
  maxLevel: number;
}
export interface Clan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
}

export interface BadgeUrls {
  small: string;
  medium: string;
  large: string;
}

export interface League {
  id: number;
  name: string;
  iconUrls: LeagueIconUrls;
}

export interface LeagueIconUrls {
  tiny?: string;
  small?: string;
  medium?: string;
}

export interface LeagueSummary {
  id: number;
  name: string;
}

export interface LegendStatistics {
  legendTrophies: number;
  previousSeason?: LegendSeason;
  bestSeason?: LegendSeason;
  bestBuilderBaseSeason?: LegendSeason;
  currentSeason?: {
    trophies: number;
  };
}

export interface LegendSeason {
  id: string;
  rank: number;
  trophies: number;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo?: string | null;
  village: "home" | "builderBase" | string;
}

export interface PlayerHouse {
  elements: HouseElement[];
}

export interface HouseElement {
  type: "ground" | "walls" | "roof" | "decoration" | string;
  id: number;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: {
    small: string;
    medium: string;
  };
}

export interface Troop {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase" | string;
}

export interface Spell {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase" | string;
}

//!Single Clan Interface...........................................................................................................

export interface CocClanType {
  tag: string
  name: string
  type: string
  description: string
  location: CoCLocation
  isFamilyFriendly: boolean
  badgeUrls: CoCBadgeUrls
  clanLevel: number
  clanPoints: number
  clanBuilderBasePoints: number
  clanCapitalPoints: number
  capitalLeague: CoCLeague
  requiredTrophies: number
  warFrequency: string
  warWinStreak: number
  warWins: number
  isWarLogPublic: boolean
  warLeague: CoCLeague
  members: number
  memberList: CoCClanMember[]
  labels: CoCLabel[]
  requiredBuilderBaseTrophies: number
  requiredTownhallLevel: number
  clanCapital: CoCClanCapital
}

export interface CoCLocation {
  id: number
  name: string
  isCountry: boolean
  countryCode: string
}

export interface CoCBadgeUrls {
  small: string
  medium: string
  large: string
}

export interface CoCLeague {
  id: number
  name: string
}

export interface CoCClanMember {
  tag: string
  name: string
  role: 'member' | 'admin' | 'coLeader' | 'leader'
  townHallLevel: number
  expLevel: number
  league?: {
    id: number
    name: string
    iconUrls: CoCIconUrls
  }
  trophies: number
  builderBaseTrophies: number
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
  playerHouse?: {
    elements: CoCHouseElement[]
  }
  builderBaseLeague?: {
    id: number
    name: string
  }
}

export interface CoCIconUrls {
  small: string
  tiny: string
  medium: string
}

export interface CoCHouseElement {
  type: string
  id: number
}

export interface CoCLabel {
  id: number
  name: string
  iconUrls: {
    small: string
    medium: string
  }
}

export interface CoCClanCapital {
  capitalHallLevel: number
  districts: CoCCapitalDistrict[]
}

export interface CoCCapitalDistrict {
  id: number
  name: string
  districtHallLevel: number
}
