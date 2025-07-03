// /constants/cocLeagues.ts

export type League = {
  name: string;
  minTrophies: number;
  maxTrophies: number;
  image: string;
};

export const cocLeagues: League[] = [
  {
    name: "Legend League",
    minTrophies: 5000,
    maxTrophies: Infinity,
    image: "/leagues/legend.png",
  },
  {
    name: "Titan League I",
    minTrophies: 4800,
    maxTrophies: 4999,
    image: "/leagues/titan-1.png",
  },
  {
    name: "Titan League II",
    minTrophies: 4600,
    maxTrophies: 4799,
    image: "/leagues/titan-2.png",
  },
  {
    name: "Titan League III",
    minTrophies: 4400,
    maxTrophies: 4599,
    image: "/leagues/titan-3.png",
  },
  {
    name: "Champion League I",
    minTrophies: 4200,
    maxTrophies: 4399,
    image: "/leagues/champion-1.png",
  },
  {
    name: "Champion League II",
    minTrophies: 4000,
    maxTrophies: 4199,
    image: "/leagues/champion-2.png",
  },
  {
    name: "Champion League III",
    minTrophies: 3800,
    maxTrophies: 3999,
    image: "/leagues/champion-3.png",
  },
  {
    name: "Master League I",
    minTrophies: 3600,
    maxTrophies: 3799,
    image: "/leagues/master-1.png",
  },
  {
    name: "Master League II",
    minTrophies: 3400,
    maxTrophies: 3599,
    image: "/leagues/master-2.png",
  },
  {
    name: "Master League III",
    minTrophies: 3200,
    maxTrophies: 3399,
    image: "/leagues/master-3.png",
  },
  {
    name: "Crystal League I",
    minTrophies: 3000,
    maxTrophies: 3199,
    image: "/leagues/crystal-1.png",
  },
  {
    name: "Crystal League II",
    minTrophies: 2800,
    maxTrophies: 2999,
    image: "/leagues/crystal-2.png",
  },
  {
    name: "Crystal League III",
    minTrophies: 2600,
    maxTrophies: 2799,
    image: "/leagues/crystal-3.png",
  },
  {
    name: "Gold League I",
    minTrophies: 2400,
    maxTrophies: 2599,
    image: "/leagues/gold-1.png",
  },
  {
    name: "Gold League II",
    minTrophies: 2200,
    maxTrophies: 2399,
    image: "/leagues/gold-2.png",
  },
  {
    name: "Gold League III",
    minTrophies: 2000,
    maxTrophies: 2199,
    image: "/leagues/gold-3.png",
  },
  {
    name: "Silver League I",
    minTrophies: 1800,
    maxTrophies: 1999,
    image: "/leagues/silver-1.png",
  },
  {
    name: "Silver League II",
    minTrophies: 1600,
    maxTrophies: 1799,
    image: "/leagues/silver-2.png",
  },
  {
    name: "Silver League III",
    minTrophies: 1400,
    maxTrophies: 1599,
    image: "/leagues/silver-3.png",
  },
  {
    name: "Bronze League I",
    minTrophies: 1200,
    maxTrophies: 1399,
    image: "/leagues/bronze-1.png",
  },
  {
    name: "Bronze League II",
    minTrophies: 1000,
    maxTrophies: 1199,
    image: "/leagues/bronze-2.png",
  },
  {
    name: "Bronze League III",
    minTrophies: 400,
    maxTrophies: 999,
    image: "/leagues/bronze-3.png",
  },
  {
    name: "Unranked",
    minTrophies: 0,
    maxTrophies: 399,
    image: "/leagues/unranked.png",
  },
];