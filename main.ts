import * as fs from "fs";

console.log("---Hello to Advent of Code 2023---");

function startChallenge(day: string) {
  const newFolder = `${__dirname}/day-${day}`;
  fs.mkdirSync(newFolder);

  const template = fs.readFileSync(`${__dirname}/template/dayXX.ts`, {encoding: "utf8"}).replaceAll("XX", day);
  const newFilePath = `${newFolder}/day${day}.ts`;
  fs.writeFileSync(newFilePath, template, {});
  
  const testTemplate = fs.readFileSync("./template/dayXX.test.ts", {encoding: "utf8"}).replaceAll("XX", day);
  const newTestFilePath = `${newFolder}/day${day}.test.ts`;
  fs.writeFileSync(newTestFilePath, testTemplate);
}

async function main() {
  const day = process.argv[2];
  if(!day) {
    console.log("You need to parse the day, e.g. `npm run create 03`");
    process.exit(1);
  }
  const newFolder = `${__dirname}/day-${day}`;
  console.log(newFolder);
  
  if(fs.existsSync(newFolder)) {
    console.log(`Folder "${newFolder}" already exists!`);
    process.exit(1);
  }
  startChallenge(day);
  process.exit(0);
}

main().then(() => {
  console.log("Happy coding :)");
})




