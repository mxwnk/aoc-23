import * as fs from "fs";
import { isDigit } from "../utils";

export function solveTask1(input: string) {
  const lines = fs.readFileSync(`./day-06/${input}`, { encoding: "utf8" }).split("\n");
  const times = lines[0].split(" ").filter(isDigit).map(Number);
  const distances = lines[1].split(" ").filter(isDigit).map(Number);
  const races = times.map((t, i) => ({ time: t, distance: distances[i] }));

  const possibleSolutions = Array(races.length).fill(0);
  for (let rIndex = 0; rIndex < races.length; rIndex++) {
    const race = races[rIndex];
    for (let tIndex = 0; tIndex < race.time; tIndex++) {
      const expectedDistance = (race.time - tIndex) * tIndex;
      if(expectedDistance > race.distance){
        possibleSolutions[rIndex]++;
      }
    }
    
  }

  return possibleSolutions.reduce((a, b) => a * b);
}

export function solveTask2(input: string) {
  return 0;
}
