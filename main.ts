import * as dotenv from "dotenv";
dotenv.config();

import * as fs from "fs";
import { fetchPuzzleInput } from "./api";

function copyTemplates(day: string) {
  const newFolder = `${__dirname}/day-${day}`;
  console.log(`Copy templates to "${newFolder}"`);
  fs.mkdirSync(newFolder);

  const template = fs.readFileSync(`${__dirname}/template/dayXX.ts`, { encoding: "utf8" }).replaceAll("XX", day);
  const newFilePath = `${newFolder}/day${day}.ts`;
  fs.writeFileSync(newFilePath, template, {});

  const testTemplate = fs.readFileSync("./template/dayXX.test.ts", { encoding: "utf8" }).replaceAll("XX", day);
  const newTestFilePath = `${newFolder}/day${day}.test.ts`;
  fs.writeFileSync(newTestFilePath, testTemplate);
}

async function main() {
  const day = process.argv[2];
  const dayNumber = parseInt(day);
  const dayString = dayNumber.toString().padStart(2, "0");
  if (!day || isNaN(dayNumber)) {
    console.log("You need to parse the day, e.g. `npm run create 3`");
    process.exit(1);
  }

  const newFolder = `${__dirname}/day-${dayString}`;
  if (fs.existsSync(newFolder)) {
    console.log(`Folder "${newFolder}" already exists!`);
    process.exit(1);
  }

  copyTemplates(dayString);
  console.log("Download new input file");
  const input = await fetchPuzzleInput(dayNumber);
  fs.writeFileSync(`${newFolder}/input.txt`, input);
  process.exit(0);
}

main().then(() => {
  console.log("Happy coding :)");
})




