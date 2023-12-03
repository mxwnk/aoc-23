import { solveTask1, solveTask2 } from "./day03";

describe("Day 3", () => {
    it("should solve task 1 with example data", () => {
        const result = solveTask1("example.txt");
        expect(result).toBe(4361);
    });

    it("should solve task 1", () => {
        const result = solveTask1("input.txt");
        console.log(`Result: ${result}`);
    });
    
    it("should solve task 2 with example data", () => {
        const result = solveTask2("example.txt");
        expect(result).toBe(467835);
    });
    
    it("should solve task 2 with real data", () => {
        const result = solveTask2("input.txt");
        console.log(`Result: ${result}`);
    });
});