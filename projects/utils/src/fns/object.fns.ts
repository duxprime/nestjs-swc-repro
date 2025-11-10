export function exists<T>(obj: T | null | undefined): obj is T {
    return obj !== null && typeof obj !== 'undefined';
}
