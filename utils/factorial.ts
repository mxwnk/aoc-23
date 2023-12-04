export function factorial(n: number) {
    if (n < 2) {
        return 1;
    }
    return factorial(n - 1) * n;
}