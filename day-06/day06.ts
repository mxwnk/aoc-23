import * as fs from "fs";
import { isDigit } from "../utils";

export function solveTask1(input: string) {
  const lines = fs.readFileSync(`./day-06/${input}`, { encoding: "utf8" })
    .split("\n");
  const times = lines[0].split(" ").filter(isDigit).map(Number);
  const distances = lines[1].split(" ").filter(isDigit).map(Number);
  const races: Race[] = times.map((t, i) => ({
    time: t,
    distance: distances[i],
  }));

  const possibleSolutions = Array(races.length).fill(0);
  for (let index = 0; index < races.length; index++) {
    const race = races[index];
    const solutions = calculateSolutionsFor(race);
    possibleSolutions[index] = solutions;
  }

  return possibleSolutions.reduce((a, b) => a * b);
}

export function solveTask2(input: string) {
  const lines = fs.readFileSync(`./day-06/${input}`, { encoding: "utf8" })
    .split("\n");
  const time = parseInt(
    lines[0].split(" ").filter(isDigit).reduce((a, b) => a + b),
  );
  const distance = parseInt(
    lines[1].split(" ").filter(isDigit).reduce((a, b) => a + b),
  );
  return calculateSolutionsFor({ time, distance });
}

type Race = { time: number; distance: number };

function calculateSolutionsFor(race: Race) {
  return [...Array(race.time).keys()]
    .map((t) => (race.time - t) * t)
    .filter((x) => x > race.distance)
    .length;
}
