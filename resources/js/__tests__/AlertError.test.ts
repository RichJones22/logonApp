import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AlertError from '@/components/AlertError.vue';

describe('AlertError', () => {
    it('renders each error message as a list item', () => {
        const wrapper = mount(AlertError, {
            props: { errors: ['Invalid email.', 'Password too short.'] },
        });
        const items = wrapper.findAll('li');
        expect(items).toHaveLength(2);
        expect(items[0].text()).toBe('Invalid email.');
        expect(items[1].text()).toBe('Password too short.');
    });

    it('deduplicates repeated error messages', () => {
        const wrapper = mount(AlertError, {
            props: { errors: ['Same error.', 'Same error.', 'Different error.'] },
        });
        expect(wrapper.findAll('li')).toHaveLength(2);
    });

    it('displays the default title when none is provided', () => {
        const wrapper = mount(AlertError, { props: { errors: ['An error.'] } });
        expect(wrapper.text()).toContain('Something went wrong.');
    });

    it('displays a custom title when provided', () => {
        const wrapper = mount(AlertError, {
            props: { errors: ['An error.'], title: 'Login failed.' },
        });
        expect(wrapper.text()).toContain('Login failed.');
    });
});
