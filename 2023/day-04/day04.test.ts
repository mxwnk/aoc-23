import { solveTask1, solveTask2 } from "./day04";

describe("Day 4", () => {
    it("should solve task 1 with example data", () => {
        const result = solveTask1("example.txt");
        expect(result).toBe(13);
    });

    it("should solve task 1 with real data", () => {
        const result = solveTask1("input.txt");
        console.log(result);
    });
    
    it("should solve task 2 with example data", () => {
        const result = solveTask2("example.txt");
        expect(result).toBe(30);
    });
    
    it("should solve task 2 with real data", () => {
        const result = solveTask2("input.txt");
        console.log(result);
    });
});