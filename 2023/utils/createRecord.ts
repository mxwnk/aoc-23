export function createRecord<T>(length: number, init: T): Record<number, T> {
    const result: Record<number, T> = {};
    new Array(length).fill(init).map((v, i) => result[i + 1] = v);
    return result;
}