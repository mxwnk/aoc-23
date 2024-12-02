import { sum } from "../utils/array.ts";
import { checkSign } from "../utils/number.ts";
import { convertToGrid } from "../utils/string.ts";

export function solvePart1(input: string) {
    const grid = convertToGrid(input);
    return grid.map(isReportSave).reduce(sum);
}

export function solvePart2(input: string) {
    const grid = convertToGrid(input);
    return grid.map(isReportSaveWithTolerate).map((r) => r.isSafe).reduce(sum);
}

export function isReportSave(level: number[]): number {
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

export function isReportSaveWithTolerate(
    level: number[],
): { isSafe: number; removedIndex?: number } {
    if (isReportSave(level)) {
        return { isSafe: 1 };
    }
    for (let i = 0; i < level.length; i++) {
        const withoutCurrentLevel = level.filter((_, j) => i !== j);
        if (isReportSave(withoutCurrentLevel)) {
            return { isSafe: 1, removedIndex: i };
        }
    }
    return { isSafe: 0 };
}
