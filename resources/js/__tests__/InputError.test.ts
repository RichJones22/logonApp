import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import InputError from '@/components/InputError.vue';

describe('InputError', () => {
    it('is hidden when no message prop is provided', () => {
        const wrapper = mount(InputError);
        expect(wrapper.isVisible()).toBe(false);
    });

    it('is hidden when message is an empty string', () => {
        const wrapper = mount(InputError, { props: { message: '' } });
        expect(wrapper.isVisible()).toBe(false);
    });

    it('is visible and displays the message when provided', () => {
        const wrapper = mount(InputError, { props: { message: 'This field is required.' } });
        expect(wrapper.isVisible()).toBe(true);
        expect(wrapper.text()).toContain('This field is required.');
    });

    it('renders the message inside a paragraph element', () => {
        const wrapper = mount(InputError, { props: { message: 'Invalid email.' } });
        expect(wrapper.find('p').text()).toBe('Invalid email.');
    });
});
