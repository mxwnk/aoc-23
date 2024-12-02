import { sum } from "../utils/array.ts";
import type { DataType } from "../utils/dataType.ts";
import { checkSign } from "../utils/number.ts";
import { convertToGrid } from "../utils/string.ts";

export function solvePart1(dataType: DataType) {
    const grid = convertToGrid(Deno.readTextFileSync(
        `${import.meta.dirname}/${dataType}.txt`,
    ));
    return grid.map(isReportSave).reduce(sum);
}

export function solvePart2(dataType: DataType) {
    const grid = convertToGrid(Deno.readTextFileSync(
        `${import.meta.dirname}/${dataType}.txt`,
    ));
    return grid.map(isReportSaveWithTolerate).reduce(sum);
}

function isReportSave(level: number[]): number {
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

function isReportSaveWithTolerate(level: number[]): number {
    if (isReportSave(level)) {
        return 1;
    }
    for (let i = 0; i < level.length; i++) {
        const withoutCurrentLevel = level.filter((_, j) => i !== j);
        if (isReportSave(withoutCurrentLevel)) {
            return 1;
        }
    }
    return 0;
}
