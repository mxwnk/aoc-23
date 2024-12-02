import { fetchPuzzleInput } from "./api.ts";
import { log } from "./infrastructure/logger.ts";
import { Day } from "./utils/day.ts";
import { dirExists } from "./utils/dir.ts";
import { copyTemplates } from "./utils/template.ts";

async function main() {
  const day = Day.from(parseInt(Deno.args[0], 10));
  await ensureTemplatesExist(day);
  await runSolution(day);
}

async function runSolution(day: Day) {
  const { part1Test, part2Test } = await import(`./day-${day}/day${day}.test.ts`);
  await part1Test();
  await part2Test();
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
  await Deno.writeTextFileSync(`${newDirPath}/example.txt`, 'TODO: Insert example data', {
    createNew: true,
  });
}

main().then(() => log.i("🎄Let's save Christmas 🎅\n"));
