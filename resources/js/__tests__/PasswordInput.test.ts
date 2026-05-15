import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PasswordInput from '@/components/PasswordInput.vue';

describe('PasswordInput', () => {
    it('renders the input as type password by default', () => {
        const wrapper = mount(PasswordInput);
        expect(wrapper.find('input').attributes('type')).toBe('password');
    });

    it('shows "Show password" aria-label on the toggle button by default', () => {
        const wrapper = mount(PasswordInput);
        expect(wrapper.find('button').attributes('aria-label')).toBe(
            'Show password',
        );
    });

    it('switches input to type text after clicking the toggle button', async () => {
        const wrapper = mount(PasswordInput);
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('input').attributes('type')).toBe('text');
    });

    it('updates aria-label to "Hide password" after toggling visible', async () => {
        const wrapper = mount(PasswordInput);
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('button').attributes('aria-label')).toBe(
            'Hide password',
        );
    });

    it('toggles back to password type on a second click', async () => {
        const wrapper = mount(PasswordInput);
        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('input').attributes('type')).toBe('password');
    });
});
