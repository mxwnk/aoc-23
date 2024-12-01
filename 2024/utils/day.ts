export class Day {
    static from(value: number) {
        return new Day(value);
    }

    private constructor(private day: number) {
    }

    value() {
        return this.day;
    }

    toString() {
        return this.day.toString().padStart(2, "0");
    }
}
