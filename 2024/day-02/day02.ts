import type { DataType } from "../utils/dataType.ts";
import { checkSign } from "../utils/number.ts";

export function solvePart1(dataType: DataType) {
    const lines = Deno.readTextFileSync(
        `${import.meta.dirname}/${dataType}.txt`,
    ).split("\n");
    let saveReports = 0;
    for (const report of lines) {
        const level = report.split(" ").map((r) => parseInt(r, 10));
        saveReports += isReportSave(level);
    }
    return saveReports;
}

function isReportSave(level: number[]): 0 | 1 {
    if (level[0] == level[1]) {
        return 0;
    }
    const initialDirection = checkSign(level[0] - level[1]);
    let i = 0;
    while (i < level.length - 1) {
        const step = level[i] - level[i + 1];
        const direction = checkSign(step);
        if (Math.abs(step) > 3 || initialDirection !== direction) {
            return 0;
        }
        i++;
    }
    return 1;
}

export function solvePart2(dataType: DataType) {
    const inputData = Deno.readTextFileSync(
        `${import.meta.dirname}/${dataType}.txt`,
    );
    return 0;
}
