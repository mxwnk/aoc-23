import { assertEquals } from "@std/assert";
import { solveTask1, solveTask2} from "./dayXX.ts";

Deno.test('should solve task 1' , () => {
    const result = solveTask1('example.txt');
    assertEquals(result, 1);
});

Deno.test('should solve task 2' , () => {
    const result = solveTask2('example.txt');
    assertEquals(result, 1);
});