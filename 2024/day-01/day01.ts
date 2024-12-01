import { sum } from "../utils/array.ts";
import { DataType } from "../utils/dataType.ts";

export function solvePart1(input: DataType) {
    const { left, right } = getLists(input);
    return left
        .map((value, index) => Math.abs(value - right[index]))
        .reduce(sum);
}

export function solvePart2(input: DataType) {
    const { left, right } = getLists(input);
    const appereances = new Map<number, number>(
        left.concat(right).map((l) => [l, 0]),
    );
    for (const value of right) {
        if (!appereances.has(value)) {
            appereances.set(value, 0);
            continue;
        }
        const current = appereances.get(value) ?? 0;
        appereances.set(value, current + 1);
    }
    return left.map((l) => (appereances.get(l) ?? 0) * l).reduce(sum);
}

function getLists(dataType: DataType): { left: number[]; right: number[] } {
    const inputData = Deno.readTextFileSync(`${import.meta.dirname}/${dataType}.txt`);
    const lines = inputData
        .split("\n")
        .map((l) => l.split("   "))
        .map((chunks) => ({
            left: parseInt(chunks[0], 10),
            right: parseInt(chunks[1], 10),
        }));
    const left = lines.map((l) => l.left).sort();
    const right = lines.map((l) => l.right).sort();
    return { left, right };
}
