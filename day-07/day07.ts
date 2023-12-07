import * as fs from "fs";
import { isDigit, sum } from "../utils";

export function solveTask2(input: string) {
  return 0;
}

export function solveTask1(input: string) {
  const games = fs.readFileSync(`./day-07/${input}`, { encoding: "utf8" })
    .split("\n").filter((x) => x !== "");
  const cardCounts = games.map(mapToCardCount);
  const sorted = cardCounts.sort((a, b) => {
    if (a.rank > b.rank) {
      return 1;
    }
    if (a.rank < b.rank) {
      return -1;
    }
    return firstHigherCard(a.hand, b.hand);
  });

  const bidsMultipliedWithRank = sorted
    .map((o, i) => {
      return parseInt(o.amount) * (i + 1);
    }).reduce(sum);
  return bidsMultipliedWithRank;
}

function firstHigherCard(handA: string, handB: string) {
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

const cardMapping = {
  "T": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};

function mapToCardCount(game: string) {
  const [hand, amount] = game.split(" ");
  const set = { hand: hand, cardCount: {}, amount, rank: 1 };
  for (const card of hand.split("")) {
    if (set.cardCount[card] === undefined) {
      set.cardCount[card] = 1;
    } else {
      set.cardCount[card]++;
    }
  }
  const countPerCards = Object.keys(set.cardCount).map((k) =>
    parseInt(set.cardCount[k])
  ).sort().reverse();
  if (countPerCards[0] == 5) {
    set.rank = 7;
  } else if (countPerCards[0] == 4) {
    set.rank = 6;
  } else if (countPerCards[0] == 3 && countPerCards[1] == 2) {
    set.rank = 5;
  } else if (countPerCards[0] == 3) {
    set.rank = 4;
  } else if (countPerCards[0] == 2 && countPerCards[1] == 2) {
    set.rank = 3;
  } else if (countPerCards[0] == 2) {
    set.rank = 2;
  }
  return set;
}

