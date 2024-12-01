import { solvePart1 , solvePart2 } from "./dayXX.ts";
import { assertEquals } from "../utils/assert.ts";

export function part1Test(){
    const exampleResult = solvePart1('example');
    assertEquals(exampleResult, 1);
    
    const actualResult = solvePart1('input');
    console.log(`Day XX - part 1 result: '${actualResult}'`);
}

export function part2Test(){
    const exampleResult = solvePart2('example');
    assertEquals(exampleResult, 1);

    const actualResult = solvePart2('input');
    console.log(`Day XX - part 2 result: '${actualResult}'`);
}