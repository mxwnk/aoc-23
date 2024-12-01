export function assertEquals(first: number, second: number) {
    const assertion = first === second;
    if (!assertion) {
        const message = [
            `\n❌ %cAssertion Error: Expected '${first}' to be equals '${second}'\n`,
            'color: red; font-weight: bold;',
        ];
        throw new AssertionError(message);
    }
}

class AssertionError extends Error {
    constructor(message: string[]) {
        super();
        console.error(...message);
    }
}
