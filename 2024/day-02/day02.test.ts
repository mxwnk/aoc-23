import { solvePart1 , solvePart2 } from "./day02.ts";
import { assertEquals } from "../utils/assert.ts";
import { log } from "../infrastructure/logger.ts";

export function part1Test(){
    const exampleResult = solvePart1('example');
    assertEquals(exampleResult, 2);
    log.s(`Day 02 - part 1 sample: ✅`);
    
    const actualResult = solvePart1('input');
    log.s(`Day 02 - part 1 result: '${actualResult}'`);
}

export function part2Test(){
    const exampleResult = solvePart2('example');
    assertEquals(exampleResult, 4);
    log.s(`Day 02 - part 2 sample: ✅`);

    const actualResult = solvePart2('input');
    log.s(`Day 02 - part 2 result: '${actualResult}'`);
}