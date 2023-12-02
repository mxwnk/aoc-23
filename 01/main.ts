import * as fs from "fs";

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
const sum = (a: number, b: number) => a + b;
const filterNumbers = (line: string): string => line.split("").filter(x => !isNaN(parseInt(x)));
const replaceNumbers = (line, [key, value]) => line.replaceAll(key, value)
const combineDigits = (line: string): number => {
  const first = line[0];
  const last = line[line.length - 1];
  return parseInt(first + last);
}

const input = fs.readFileSync("input.txt", { encoding: "utf8" });
const lines = input.split("\n");
const result = lines
  .map(line => numbers.reduce(replaceNumbers, line))
  .map(filterNumbers)
  .map(combineDigits)
  .reduce(sum);

console.log(result);

