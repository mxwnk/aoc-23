import { solveTask1, solveTask2 } from "./day06";

describe("Day 06", () => {
  it("should solve task 1 with example data", () => {
    const result = solveTask1("example.txt");
    expect(result).toBe(288);
  });

  it("should solve task 1 with real data", () => {
    const result = solveTask1("input.txt");
    console.log(result);
  });
  
  it("should solve task 2 with example data", () => {
    const result = solveTask2("example.txt");
    expect(result).toBe(71503);
  });
  
  it("should solve task 2 with real data", () => {
    const result = solveTask2("input.txt");
    console.log(result);
  });
});
