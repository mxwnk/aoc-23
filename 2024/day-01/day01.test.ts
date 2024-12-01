import { solvePart1 , solvePart2 } from "./day01.ts";
import { assertEquals } from "../utils/assert.ts";

export function part1Test(){
    const exampleResult = solvePart1('example');
    assertEquals(exampleResult, 11);
    
    const actualResult = solvePart1('input');
    console.log(`Day 01 - part 1 result: '${actualResult}'`);
}

export function part2Test(){
    const exampleResult = solvePart2('example');
    assertEquals(exampleResult, 31);

    const actualResult = solvePart2('input');
    console.log(`Day 01 - part 2 result: '${actualResult}'`);
}