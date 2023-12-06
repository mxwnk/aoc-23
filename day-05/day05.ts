import * as fs from "fs";
import { isDigit } from "../utils";

export function solveTask1(input: string) {
  const lines = fs.readFileSync(`./day-05/${input}`, { encoding: "utf8" });
  const categories = lines.split("\n\n").map(convertCategories);
  const seeds = getSeeds(lines).map(m => parseInt(m));
  categories.shift();
  const locationNumbers: number[] = [];

  for (const seed of seeds) {
    let source = seed;
    for (const cateory of categories) {
      const mappingMatch = cateory.filter((c) => c.source <= source && source <= (c.source + c.length));
      if (mappingMatch.length != 1) {
        continue;
      }
      const mapping = mappingMatch[0];
      const index = source - mapping.source; 
      const destination = mapping.destination + index;
      source = destination;
    }
    locationNumbers.push(source)
  }

  return Math.min(...locationNumbers);
}

const getSeeds = (lines: string) => lines.split("\n")[0].replace("seeds: ", "").split(" ").filter(isDigit);

function convertCategories(mapping: string): Mapping[] {
  const lines = mapping.split("\n");

  return lines.filter((l) => !l.includes("map")).map((l) => {
    const numbers = l.split(" ").filter(isDigit);
    return {
      source: parseInt(numbers[1]),
      destination: parseInt(numbers[0]),
      length: parseInt(numbers[2]),
    };
  }).filter(f => !isNaN(f.source));
}

type Mapping = {
  source: number;
  destination: number;
  length: number;
};

export function solveTask2(input: string) {
  return 0;
}
