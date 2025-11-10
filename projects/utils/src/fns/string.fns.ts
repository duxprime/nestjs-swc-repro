import { exists } from './object.fns';

export function hasText(s?: string): s is string {
    return exists(s) && s.length > 0;
}
