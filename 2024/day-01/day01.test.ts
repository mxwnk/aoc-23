import { expect } from "jsr:@std/expect";
import { solvePart1 , solvePart2 } from "./day01.ts";

Deno.test("Day 01 - should solve part 1", () => {
    const result = solvePart1(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(11);
});

Deno.test("Day 01 - should solve part 2", () => {
    const result = solvePart2(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(31);
});
