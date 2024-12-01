import { solvePart1, solvePart2 } from "./dayXX.ts";
import { expect } from "@std/expect/expect";

Deno.test("Day XX - should solve part 1", () => {
    const result = solvePart1(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(0);
});

Deno.test("Day XX - should solve part 2", () => {
    const result = solvePart2(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(0);
});
