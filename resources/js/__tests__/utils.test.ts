import { describe, expect, it } from 'vitest';
import { cn, toUrl } from '@/lib/utils';

describe('cn', () => {
    it('merges class names into a single string', () => {
        expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('ignores falsy values', () => {
        expect(cn('foo', false && 'bar', undefined, 'baz')).toBe('foo baz');
    });

    it('resolves Tailwind conflicts by keeping the last value', () => {
        expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });

    it('handles conditional object syntax', () => {
        expect(cn({ 'font-bold': true, italic: false })).toBe('font-bold');
    });
});

describe('toUrl', () => {
    it('returns a string href unchanged', () => {
        expect(toUrl('/dashboard')).toBe('/dashboard');
    });

    it('extracts the url property from an object href', () => {
        expect(toUrl({ url: '/login', method: 'get', data: {} } as any)).toBe(
            '/login',
        );
    });
});
