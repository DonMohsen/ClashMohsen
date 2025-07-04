import type {
  ClashRoyalePlayerType,
  BrawlStarsPlayerType,
} from "./data.types";
import type { CocPlayerType, CocClanType } from "./coc.types";

export type ClashRoyalePick = Pick<ClashRoyalePlayerType, "name" | "currentPathOfLegendSeasonResult"|"expLevel"|"tag">;
export type CocPlayerPick = Pick<CocPlayerType, "name" | "expLevel"|"townHallLevel"|"townHallWeaponLevel"|"tag">;
export type BrawlStarsPick = Pick<BrawlStarsPlayerType, "name" | "tag">;
export type CocClanPick = Pick<CocClanType, "name" | "tag"|"badgeUrls"|"location">;

export type BookmarkedType =
  | ClashRoyalePick
  | CocPlayerPick
  | BrawlStarsPick
  | CocClanPick;
export enum TagType {
  player = "player",
  clan = "clan",
  club = "club",
  tournament="tournament"
}