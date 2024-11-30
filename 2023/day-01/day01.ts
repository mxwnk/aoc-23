import * as fs from "fs";
import { isDigit, sum } from "../utils";

const numberMapping: { [index: string]: string } = {
  "one": "o1ne",
  "two": "t2wo",
  "three": "th3ree",
  "four": "fo4ur",
  "five": "fi5ve",
  "six": "s6ix",
  "seven": "se7ven",
  "eight": "ei8ght",
  "nine": "ni9ne"
};

const numbers = Object.entries(numberMapping);
const filterNumbers = (line: string) => line.split("").filter(isDigit);
const replaceNumbers = (line, [key, value]) => line.replaceAll(key, value)
const combineDigits = (line: string): number => {
  const first = line[0];
  const last = line[line.length - 1];
  return parseInt(first + last);
}

export function solveTask2(inputFilePath: string){
  const input = fs.readFileSync("./day-01/" + inputFilePath, { encoding: "utf8" });
  const lines = input.split("\n");
  const result = lines
    .map(line => numbers.reduce(replaceNumbers, line))
    .map(filterNumbers)
    //@ts-ignore
    .map(combineDigits)
    .reduce(sum);
  return result;
}
