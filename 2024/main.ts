import { fetchPuzzleInput } from "./api.ts";
import { dirExists } from "./utils/dir.ts";
import { copyTemplates } from "./utils/template.ts";

async function main() {
  const dayNumber = parseInt(Deno.args[0], 10);
  const dayString = dayNumber.toString().padStart(2, "0");

  const newDirPath = `day-${dayString}`;
  if (await dirExists(newDirPath)) {
    console.log(`Directory '${newDirPath}' already exists.`);
    return;
  }

  await Deno.mkdirSync(newDirPath);
  await copyTemplates("dayXX.ts", dayString);
  await copyTemplates("dayXX.test.ts", dayString);

  const puzzleInput = await fetchPuzzleInput(dayNumber);
  await Deno.writeTextFileSync(`${newDirPath}/example.txt`, puzzleInput, {
    createNew: true,
  });
}

main().then(() => console.log("Happy coding 👨‍💻\n"));
