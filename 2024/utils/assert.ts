import { log } from "../infrastructure/logger.ts";

export function assertEquals(first: number, second: number) {
    const assertion = first === second;
    if (!assertion) {
        const message = `Assertion Error: Expected '${first}' to be equals '${second}'\n`;
        throw new AssertionError(message);
    }
}

class AssertionError extends Error {
    constructor(message: string) {
        super();
        log.e(message);
    }
}
