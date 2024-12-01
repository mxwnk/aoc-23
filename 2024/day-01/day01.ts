import { sum } from "../utils/array.ts";

export function solveTask1(input: string) {
    const { left, right } = getLists(input);
    return left
        .map((value, index) => Math.abs(value - right[index]))
        .reduce(sum);
}

export function solveTask2(input: string) {
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

function getLists(input: string): { left: number[]; right: number[] } {
    const content = Deno.readTextFileSync(input);
    const lines = content
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
