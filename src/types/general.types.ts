import { CocPlayerType } from "./coc.types";
import { BrawlStarsPlayerType, ClashRoyalePlayerType } from "./data.types";

export type PlayerData =
  | ClashRoyalePlayerType
  | CocPlayerType
  | BrawlStarsPlayerType;
