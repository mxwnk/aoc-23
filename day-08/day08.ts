import * as fs from "fs";

export function solveTask1(input: string) {
  const lines = fs.readFileSync(`./day-08/${input}`, { encoding: "utf8" })
    .replaceAll("(", "").replaceAll(" ", "").replaceAll(")", "").split("\n")
    .filter((x) => x);
  const lr: string[] = lines.shift()?.split("") as string[];
  
  const instructions = lines.map(convertInstruction);
  const set = {};
  for (const instruction of instructions) {
    set[instruction.target] = instruction;
  }
  let stepper = { steps: 0, nextTarget: "AAA", index: 0 };
  while (true) {
    const nextLR = lr[stepper.index];
    if (nextLR === "L") {
      stepper.nextTarget = set[stepper.nextTarget].left;
    } else if(nextLR === "R"){
      stepper.nextTarget = set[stepper.nextTarget].right;
    } else {
      throw new Error(nextLR);
    }
    stepper.steps++;
    if (stepper.index === lr.length - 1) {
      stepper.index = 0;
    } else {
      stepper.index++;
    }
    if(stepper.nextTarget === "ZZZ"){
      break;
    }
  }

  return stepper.steps;
}

function convertInstruction(line: string) {
  const [target, lr] = line.split("=");
  const [left, right] = lr.split(",");
  return { target, left, right };
}

export function solveTask2(input: string) {
  return 0;
}
