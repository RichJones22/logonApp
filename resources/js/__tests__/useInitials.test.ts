import { describe, expect, it } from 'vitest';
import { getInitials } from '@/composables/useInitials';

describe('getInitials', () => {
    it('returns empty string when given no argument', () => {
        expect(getInitials(undefined)).toBe('');
    });

    it('returns empty string for an empty string', () => {
        expect(getInitials('')).toBe('');
    });

    it('returns uppercased first letter for a single name', () => {
        expect(getInitials('John')).toBe('J');
    });

    it('returns first and last initials for a full name', () => {
        expect(getInitials('John Doe')).toBe('JD');
    });

    it('uses only first and last name when middle names are present', () => {
        expect(getInitials('John Michael Doe')).toBe('JD');
    });

    it('uppercases initials from lowercase input', () => {
        expect(getInitials('john doe')).toBe('JD');
    });
});
