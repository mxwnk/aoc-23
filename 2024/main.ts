import { fetchPuzzleInput } from "./api.ts";
import { Day } from "./utils/day.ts";
import { dirExists } from "./utils/dir.ts";
import { copyTemplates } from "./utils/template.ts";

async function main() {
  const day = Day.from(parseInt(Deno.args[0], 10));
  await ensureTemplatesExist(day);
  await runSolutions(day);
}

async function runSolutions(day: Day) {
  const { solvePart1, solvePart2 } = await import(`./day-${day}/day${day}.ts`);
  const inputFilePath = `${import.meta.dirname}/day-${day}/input.txt`;
  const part1 = await solvePart1(inputFilePath);
  const part2 = await solvePart2(inputFilePath);
  console.log(`Solution for day ${day} - part 1: '${part1}'`);
  console.log(`Solution for day ${day} - part 2: '${part2}'`);
}

async function ensureTemplatesExist(day: Day) {
  const dayString = day.toString().padStart(2, "0");
  const newDirPath = `day-${dayString}`;
  if (await dirExists(newDirPath)) {
    return;
  }
  await Deno.mkdirSync(newDirPath);
  await copyTemplates("dayXX.ts", dayString);
  await copyTemplates("dayXX.test.ts", dayString);
  const puzzleInput = await fetchPuzzleInput(day);
  await Deno.writeTextFileSync(`${newDirPath}/input.txt`, puzzleInput, {
    createNew: true,
  });
}

main().then(() => console.log("Happy coding 👨‍💻\n"));
