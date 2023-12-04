import * as fs from "fs";

export const readFileLines = (filePath: string): string[] => 
  fs.readFileSync(filePath, { encoding: "utf8" })
    .split("\n");
