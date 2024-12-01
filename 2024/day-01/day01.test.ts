import { expect } from "jsr:@std/expect";
import { solveTask1, solveTask2 } from "./day01.ts";

Deno.test("Day 1 - should solve task 1", () => {
    const result = solveTask1(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(11);
});

Deno.test("Day 1 - should solve task 2", () => {
    const result = solveTask2(`${import.meta.dirname}/example.txt`);
    expect(result).toBe(31);
});
