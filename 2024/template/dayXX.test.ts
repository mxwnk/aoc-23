import { solvePart1 , solvePart2 } from "./dayXX.ts";
import { assertEquals } from "../utils/assert.ts";
import { log } from "../infrastructure/logger.ts";

export function part1Test(){
    const exampleResult = solvePart1('example');
    assertEquals(exampleResult, 1);
    log.s(`Day XX - part 1 sample: ✅`);
    
    const actualResult = solvePart1('input');
    log.s(`Day XX - part 1 result: '${actualResult}'`);
}

export function part2Test(){
    const exampleResult = solvePart2('example');
    assertEquals(exampleResult, 1);
    log.s(`Day XX - part 2 sample: ✅`);

    const actualResult = solvePart2('input');
    log.s(`Day XX - part 2 result: '${actualResult}'`);
}