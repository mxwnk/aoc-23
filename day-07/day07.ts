import * as fs from "fs";
import { isDigit, sum } from "../utils";

export function solveTask2(input: string) {
  const lines = fs.readFileSync(`./day-07/${input}`, { encoding: "utf8" }).split("\n").filter((x) => x !== "");
  const games = lines.map(mapLineToGameV2).sort(sortGameByRank);
  const totalWinnings = games.map((g, i) => multiplyGameBidWithRank(g, i + 1)).reduce(sum);
  return totalWinnings;
}

export function solveTask1(input: string) {
  const lines = fs.readFileSync(`./day-07/${input}`, { encoding: "utf8" }).split("\n").filter((x) => x !== "");
  const games = lines.map(mapLineToGame).sort(sortGameByRank);
  const totalWinnings = games.map((g, i) => multiplyGameBidWithRank(g, i + 1)).reduce(sum);
  return totalWinnings;
}

function multiplyGameBidWithRank(game: Game, rankIndex: number) {
  return game.bid * rankIndex;
}

function sortGameByRank(a: Game, b: Game) {
  if (a.rank > b.rank) {
    return 1;
  }
  if (a.rank < b.rank) {
    return -1;
  }
  return sortByHigherCards(a.hand, b.hand);
}

function sortByHigherCards(handA: string, handB: string) {
  for (let i = 0; i < handA.split("").length; i++) {
    const higherCard = isCardHigher(handA[i], handB[i]);
    if (higherCard !== 0) {
      return higherCard;
    }
  }
  return 0;
}

function isCardHigher(a: string, b: string): number {
  const rankA = toCardRank(a);
  const rankB = toCardRank(b);
  if (rankA > rankB) {
    return 1;
  } else if (rankB > rankA) {
    return -1;
  }
  return 0;
}

function toCardRank(c: string): number {
  if (isDigit(c)) {
    return parseInt(c);
  }
  return cardMapping[c];
}

const cardMappingV2 = {
  "T": 10,
  "J": 1,
  "Q": 12,
  "K": 13,
  "A": 14,
};

const cardMapping = {
  "T": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};

type Game = {
  hand: string,
  cardCount: {},
  bid: number,
  rank: number
}

function mapLineToGameV2(line: string): Game {
  const [hand, bid] = line.split(" ");
  const game: Game = { hand: hand, cardCount: {}, bid: parseInt(bid), rank: 1 };
  for (const card of hand.split("")) {
    if (game.cardCount[card] === undefined) {
      game.cardCount[card] = 1;
    } else {
      game.cardCount[card]++;
    }
  }
  const countPerCards = Object.keys(game.cardCount).filter(k => k !== "J").map((k) => parseInt(game.cardCount[k])
  ).sort().reverse();
  const jokers = game.cardCount["J"] ?? 0; 

  if (jokers === 5 || countPerCards[0] + jokers == 5) {
    game.rank = 7;
  } else if (countPerCards[0] + jokers == 4) {
    game.rank = 6;
  } else if (countPerCards[0] + jokers == 3 && countPerCards[1] == 2) {
    game.rank = 5;
  } else if (countPerCards[0] + jokers == 3) {
    game.rank = 4;
  } else if (countPerCards[0] + jokers == 2 && countPerCards[1] == 2) {
    game.rank = 3;
  } else if (countPerCards[0] + jokers == 2) {
    game.rank = 2;
  } 
  console.log(game, `Jokers: ${jokers}`);
  return game;
}

function mapLineToGame(line: string): Game {
  const [hand, bid] = line.split(" ");
  const game: Game = { hand: hand, cardCount: {}, bid: parseInt(bid), rank: 1 };
  for (const card of hand.split("")) {
    if (game.cardCount[card] === undefined) {
      game.cardCount[card] = 1;
    } else {
      game.cardCount[card]++;
    }
  }
  const countPerCards = Object.keys(game.cardCount).map((k) => parseInt(game.cardCount[k])
  ).sort().reverse();
  if (countPerCards[0] == 5) {
    game.rank = 7;
  } else if (countPerCards[0] == 4) {
    game.rank = 6;
  } else if (countPerCards[0] == 3 && countPerCards[1] == 2) {
    game.rank = 5;
  } else if (countPerCards[0] == 3) {
    game.rank = 4;
  } else if (countPerCards[0] == 2 && countPerCards[1] == 2) {
    game.rank = 3;
  } else if (countPerCards[0] == 2) {
    game.rank = 2;
  }
  return game;
}

