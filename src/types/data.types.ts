export enum GameType {
  clashroyale = "clash-royale",
  coc = "coc",
  brawlstars = "brawl-stars",
}
//!COC Res................................................................................................................................
// types/coc.types.ts

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
//!Clash Royale Player Response Type......................................................................................................
export interface ClashRoyalePlayerType {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  arena: Arena;
  leagueStatistics: LeagueStatistics;
  badges: Badge[];
  cards: Card[];
  supportCards: SupportCard[];
  currentDeck: CurrentDeckCard[];
  currentDeckSupportCards: SupportCard[];
  currentFavouriteCard: FavouriteCard;
  starPoints: number;
  expPoints: number;
  legacyTrophyRoadHighScore: number;
  currentPathOfLegendSeasonResult: PathOfLegendSeasonResult;
  lastPathOfLegendSeasonResult: PathOfLegendSeasonResult;
  bestPathOfLegendSeasonResult: PathOfLegendSeasonResult;
  progress: Record<string, PathProgress>;
  totalExpPoints: number;
}

// Shared Types
export interface Arena {
  id: number;
  name: string;
}

export interface LeagueStatistics {
  currentSeason?: LeagueSeason;
  previousSeason?: LeagueSeason & { id: string };
  bestSeason?: LeagueSeason & { id: string };
}

export interface LeagueSeason {
  trophies: number;
  bestTrophies?: number;
}

export interface Badge {
  name: string;
  level: number;
  maxLevel: number;
  progress: number;
  iconUrls: {
    large: string;
  };
}

export interface BaseCard {
  name: string;
  id: number;
  level: number;
  maxLevel: number;
  rarity: "common" | "rare" | "epic" | "legendary" | string;
  count: number;
  iconUrls: {
    medium: string;
    evolutionMedium?: string;
  };
}

export interface Card extends BaseCard {
  elixirCost: number;
}

export interface SupportCard extends BaseCard {}

export interface CurrentDeckCard extends Card {
  starLevel?: number;
  evolutionLevel?: number;
  maxEvolutionLevel?: number;
}

export interface FavouriteCard
  extends Omit<CurrentDeckCard, "level" | "count"> {}

export interface PathOfLegendSeasonResult {
  leagueNumber: number;
  trophies: number;
  rank: number | null;
}

export interface PathProgress {
  arena: Arena;
  trophies: number;
  bestTrophies: number;
}
//!Brawl Stars Player Response Type......................................................................................................
export interface BrawlStarsPlayerType {
  tag: string;
  name: string;
  nameColor: string;
  icon: {
    id: number;
  };
  trophies: number;
  highestTrophies: number;
  expLevel: number;
  expPoints: number;
  isQualifiedFromChampionshipChallenge: boolean;
  "3vs3Victories": number;
  soloVictories: number;
  duoVictories: number;
  bestRoboRumbleTime: number;
  bestTimeAsBigBrawler: number;
  club?: Record<string, unknown>; // Could be replaced with proper type if club details are known
  brawlers: Brawler[];
}

export interface Brawler {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  highestTrophies: number;
  gears: Gear[];
  starPowers: Ability[];
  gadgets: Ability[];
}

export interface Gear {
  id: number;
  name: string;
  level: number;
}

export interface Ability {
  id: number;
  name: string;
}

export type PlayerData =
  | ClashRoyalePlayerType
  | CocPlayerType
  | BrawlStarsPlayerType;
