import { solvePart1 , solvePart2 } from "./day02.ts";
import { assertEquals } from "../utils/assert.ts";
import { log } from "../infrastructure/logger.ts";

export function part1Test(){
    const exampleInput = Deno.readTextFileSync(`${import.meta.dirname}/example.txt`);
    const exampleResult = solvePart1(exampleInput);
    assertEquals(exampleResult, 2);
    log.s(`Day 02 - part 1 sample: ✅`);
    
    const actualInput = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
    const actualResult = solvePart1(actualInput);
    log.s(`Day 02 - part 1 result: '${actualResult}'`);
}

export function part2Test(){
    const exampleInput = Deno.readTextFileSync(`${import.meta.dirname}/example.txt`);
    const exampleResult = solvePart2(exampleInput);
    assertEquals(exampleResult, 4);
    log.s(`Day 02 - part 2 sample: ✅`);

    const actualInput = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);
    const actualResult = solvePart2(actualInput);
    log.s(`Day 02 - part 2 result: '${actualResult}'`);
}